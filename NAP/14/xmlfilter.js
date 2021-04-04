const R = require('ramda');

// D, C, HO
const contentOfTag = R.curry(
    (xmlNode, tagName) => xmlNode.getElementsByTagName(tagName)[0].textContent
);

const contentOfSource = contentOfTag(R.__, 'source'); // D, C, HO
const contentOfAdded = contentOfTag(R.__, 'added'); // D, C, HO
const contentOfUpdated = contentOfTag(R.__, 'lastupdated'); // D, C, HO
const contentOfID = contentOfTag(R.__, 'id'); // D, C, HO
const getGitHubProject = xmlNode => contentOfSource(xmlNode).replace('https://github.com/', ''); // D

// Ao imprimir as apps, além do nome, imprima
// a data que foi adicionada e a data da última atualização.
const returnAppValues = xmlNode => {
	return {
		name: getGitHubProject(xmlNode),
		addedDate: contentOfAdded(xmlNode),
		updatedDate: contentOfUpdated(xmlNode)
	}
}

// D
const elementsToArray = nodes => {
    const arr = [];
    for (let i = 0; i < nodes.length; i++)
        arr.push(nodes[i]);
    return arr;
};

// D, C
const isValid = R.curry(
    (app, addedAfterYear, updatedAfterYear) => {
        if (!contentOfSource(app).includes('github.com'))
            return false;

        const addedDate = new Date(contentOfAdded(app));
        if (addedDate.getFullYear() < addedAfterYear)
            return false;

        const lastUpdatedDate = new Date(contentOfUpdated(app));
        if (lastUpdatedDate.getFullYear() < updatedAfterYear)
            return false;

        return true;
    }
);

module.exports = {
    isValid,
    elementsToArray,
    getGitHubProject,
    contentOfSource,
    contentOfID,
	returnAppValues
};
