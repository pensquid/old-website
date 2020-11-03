import randomName from 'node-random-name'

const ventHook = process.env.VENTING_WEBHOOK_URL

export default async (req, res) => {
  const name = randomName({ first: true, seed: req.query.seed ?? 'bob' })

  const rex = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${encodeURIComponent(process.env.RECAPTCHA_SECRET)}&response=${encodeURIComponent(req.query.captcha)}`
  })
  const json = await rex.json()

  if (!json.success) {
    res.status(401)
    return res.end('Incorrect captcha')
  }

  await fetch(ventHook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: name,
      avatar_url: `https://adorable.pwnsquad.net/500/${encodeURIComponent(name)}`,
      content: req.query.message?.trim()?.replace(/@/g, '`@`') ?? 'No message content :('
    })
  })

  res.status(200)
  res.end('OK')
}
