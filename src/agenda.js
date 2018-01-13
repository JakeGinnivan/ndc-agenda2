import * as cheerio from 'cheerio'

export const fetchAgenda = async () => {
    return require('./agenda.json')
    //   const response = await fetch('https://ndc-london.com/agenda/')
    //   const body = await response.text()
    //   const talks = []
    //   const $ = cheerio.load(body)
    //   $('section.day').map((i, el) => {
    //     // prettier-ignore
    //     const dayElements = el.childNodes
    //             .filter(c => c.type === 'tag')[0]
    //             .children
    //             .filter(c => c.type === 'tag')
    //     for (var index = 0; index < dayElements.length / 2; index += 2) {
    //       const slotEl = cheerio(dayElements[index])
    //       const talkSlot = slotEl.text().split(' - ')
    //       const startParts = talkSlot[0].split(':')
    //       const endParts = talkSlot[1].split(':')
    //       const startTime = {
    //         hour: Number(startParts[0]),
    //         minutes: Number(startParts[1])
    //       }
    //       const endTime = {
    //         hour: Number(endParts[0]),
    //         minutes: Number(endParts[1])
    //       }
    //       cheerio(dayElements[index + 1])
    //         .find('.boxed-talk')
    //         .each((j, talkEl) => {
    //           const $talk = cheerio(talkEl)
    //           const tags = talkEl.attribs['data-slugs'].split(',')
    //           const link = talkEl.attribs.href
    //           const location = $talk.find('.venue').text()
    //           const title = $talk.find('h2').text()
    //           const speaker = $talk.find('.speaker').text()
    //           talks.push({
    //             title,
    //             speaker,
    //             location,
    //             link,
    //             tags,
    //             startTime,
    //             endTime,
    //             day: i + 1
    //           })
    //         })
    //     }
    //   })
    //   return talks
}
