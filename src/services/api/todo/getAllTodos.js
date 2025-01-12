import TODO_API_URL from './TODO_API_URL'

export default async function getAllTodos() {
  const response = await fetch(TODO_API_URL)
  if (!response) {
    throw new Error('Network response was not ok')
  }
  return {
    status: response.status,
    data: await response.json()
  }
}
