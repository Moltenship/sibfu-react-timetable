/** Represents class sync type. */
export enum SyncType {
  Sync = 'синхронно',
  Async = 'асинхронно',
}

export const SyncTypeColors = {
  [SyncType.Sync]: 'orange',
  [SyncType.Async]: 'teal',
};
