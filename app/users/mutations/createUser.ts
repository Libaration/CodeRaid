import db from "db"
export default async function createUser(values) {
  let user
  const existing = await db.room.findMany({ where: { id: values.roomNumber } })
  if (!existing.length) {
    await db.room.create({ data: { id: values.roomNumber } })
    user = await db.user.create({
      data: {
        roomId: values.roomNumber,
        name: values.name,
      },
    })
  } else {
    user = await db.user.create({ data: { name: values.name, roomId: values.roomNumber } })
  }
  return user
}
