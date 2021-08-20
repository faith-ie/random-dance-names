import * as dance from '../lib/danceNames.json';
export function generateDanceNames() : string {
    return dance[Math.floor(Math.random() * dance.length)]
}
