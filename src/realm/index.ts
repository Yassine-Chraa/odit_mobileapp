import Realm from 'realm';

export const getRealm = () => {
  return Realm.open({
    schema: [],
    deleteRealmIfMigrationNeeded: true,
  });
};
