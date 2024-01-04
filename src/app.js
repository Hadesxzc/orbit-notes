export function createNote(title, body) {
  return { id: crypto.randomUUID(), title, body, createdAt: Date.now() };
}
