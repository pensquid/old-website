import randomName from 'node-random-name'

const ventHook = process.env.VENTING_WEBHOOK_URL

export default async (req, res) => {
  const name = randomName({ first: true, seed: req.query.seed ?? 'bob' })

  await fetch(ventHook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: name,
      avatar_url: `https://api.adorable.io/avatars/500/${encodeURIComponent(name)}`,
      content: req.query.message?.trim()?.replace(/@/g, '`@`') ?? 'No message content :('
    })
  })

  res.status(200)
  res.end()
}