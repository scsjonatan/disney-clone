const transformTitleToId = (title) => title.toLowerCase().replace(/ /g, '-');

const searchDetailByParsedTitle = (parsedTitle, contentList) =>
  contentList.find(({ title }) => transformTitleToId(title) === parsedTitle);

export default {
  transformTitleToId,
  searchDetailByParsedTitle,
};
