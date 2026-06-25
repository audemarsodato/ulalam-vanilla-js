
// TODO: trim to remove spaces, if a space we remove or skip it
export function toArray(text) { 
        let line = ''
        let array = []
        for (let i = 0; i < text.length; i++) {
                if (text[i] === '\n') {
                        array.push(line)
                        line = ''
                        continue
                }

                line += text[i]

                if (i + 1 === text.length) {
                        array.push(line)
                }
        }
        return array
}

export function capitlize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1)
}