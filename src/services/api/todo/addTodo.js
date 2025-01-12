import TODO_API_URL from './TODO_API_URL'

export default async function addTodo(data) {
  if (!data) {
    throw new Error('Data is required')
    return
  }
  const response = await fetch(TODO_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (!response) {
    throw new Error('Network response was not ok')
  }
  return {
    status: response.status,
    data: await response.json()
  }
}
