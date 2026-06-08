
export function toArray(text) {
        let word = ''
        let array = []
        for (let i = 0; i < text.length; i++) {
                if (text[i] === '\n' || text[i] === ' ') {
                        array.push(word)
                        word = ''
                        continue
                }

                word += text[i]

                if (i + 1 === text.length) {
                        array.push(word)
                }
        }
        return array
}