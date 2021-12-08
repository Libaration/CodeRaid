import db from "db"
export default async function createUser(name, roomNumber) {
  const existing = await db.room.findMany({ where: { id: roomNumber } })
  if (!existing.length) {
    await db.room.create({ data: { id: roomNumber } })
  }
  const user = await db.user.create({
    data: {
      room: roomNumber,
      name: name,
    },
  })
  return user
}
