'use client';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

export function DeleteNote({ id }: { id: string }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="font-semibold underline">
        Delete Note
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 z-50 backdrop-blur-2xl" />
        <AlertDialog.Content className="fixed inset-0 z-50 flex h-[75vh] items-center justify-center p-4">
          <div className="max-w-lg rounded-md border bg-slate-900 p-6">
            <AlertDialog.Title className="text-2xl font-bold">
              Are You Sure
            </AlertDialog.Title>
            <AlertDialog.Description className="mb-6 mt-2 text-slate-400">
              This action cannot be undone. This will permanently delete this
              Note.
            </AlertDialog.Description>
            <div className="flex justify-end gap-4">
              <AlertDialog.Cancel className="button border hover:bg-slate-800">
                Cancel
              </AlertDialog.Cancel>
              <AlertDialog.Action
                onClick={console.log}
                className="button bg-red-800 focus:ring-red-800"
              >
                Yes, Delete
              </AlertDialog.Action>
            </div>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
