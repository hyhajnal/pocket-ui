// import { toCamel, lowerInitial } from '../../utils';

const requireFiles = require.context('../../src/components', true, /src\/index\.js/)
const components = []

requireFiles.keys().forEach(key => {
    const info = requireFiles(key)
    components.push(requireFiles(key).default)
})

export default components