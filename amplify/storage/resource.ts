import { defineStorage } from '@aws-amplify/backend';

export const userPictureBucket = defineStorage({
  name: 'userPictureBucket',
  isDefault: true,
  access: (allow) => ({
    'picture-submissions/*': [
        allow.authenticated.to(['read','write', 'delete']),
        allow.guest.to(['read'])
    ]
  })
});

export const publicPictureBucket = defineStorage({
  name: 'publicPictureBucket',
  access: (allow) => ({
    'picture-public/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});

