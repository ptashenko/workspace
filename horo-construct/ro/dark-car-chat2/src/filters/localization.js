import local from '../local.json'

export default function localize(key) {
    return local[key]
}