import { db } from './db';
import { getAuthUserId } from './session';

export async function validateOwner(id: string) {
  const userId = await getAuthUserId();
  await db.note.findFirstOrThrow({
    where: { id, userId },
    select: null,
  });
}
