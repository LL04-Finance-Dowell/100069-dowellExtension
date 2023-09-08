export function getOrganisation(data) {
  const uniqueOrgs = {};
  const resultArray = [];

  for (const item of data) {
    if (item.org_id !== undefined && !uniqueOrgs[item.org_name]) {
      uniqueOrgs[item.org_name] = true;
      resultArray.push(item);
    }
  }
  return resultArray;
}
