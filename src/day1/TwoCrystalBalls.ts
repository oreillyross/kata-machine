export default function two_crystal_balls(breaks: boolean[]): number {

	const jmp = Math.floor(Math.sqrt(breaks.length))
	for (let i = 0; i < breaks.length; i += jmp) {
		if (breaks[i] === true) {
			i -= jmp
			for (let j = i; j < breaks.length; j++) {
				if (breaks[j] === true) {
					return j
				}
			}
		}
	}
	return -1


}