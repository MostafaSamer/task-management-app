import { createEntityAdapter } from '@reduxjs/toolkit';

const adapter = createEntityAdapter({
  selectId: (tasks) => tasks.id,
});

export default adapter;
