export const useCountry = () => {
  const getCountry = async (event: any) => {
    const perPage = parseInt((event.perPage as string) || '5', 10)
    const page = parseInt((event.page as string) || '1', 10)
    const filter = (event.filter as string) || ''

    const data = await getData()
    return {
      total: data.length,
      data: filterData(data, filter, page, perPage),
    }
  }

  function filterData(
    data: any[],
    filter: string,
    page: number,
    perPage: number,
  ) {
    const offset = (page - 1) * perPage
    if (!filter) {
      return data.slice(offset, offset + perPage)
    }
    const filterRe = new RegExp(filter, 'i')
    return data
      .filter((item) => {
        return [item.name].some((item) => item.match(filterRe))
      })
      .slice(offset, offset + perPage)
  }

  async function getData() {
    return Promise.resolve([
      {
        name: 'Ascension Island',
        emoji: '🇦🇨',
        unicode: 'U+1F1E6 U+1F1E8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg',
      },
      {
        name: 'Andorra',
        emoji: '🇦🇩',
        unicode: 'U+1F1E6 U+1F1E9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg',
      },
      {
        name: 'United Arab Emirates',
        emoji: '🇦🇪',
        unicode: 'U+1F1E6 U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg',
      },
      {
        name: 'Afghanistan',
        emoji: '🇦🇫',
        unicode: 'U+1F1E6 U+1F1EB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg',
      },
      {
        name: 'Antigua & Barbuda',
        emoji: '🇦🇬',
        unicode: 'U+1F1E6 U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg',
      },
      {
        name: 'Anguilla',
        emoji: '🇦🇮',
        unicode: 'U+1F1E6 U+1F1EE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg',
      },
      {
        name: 'Albania',
        emoji: '🇦🇱',
        unicode: 'U+1F1E6 U+1F1F1',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg',
      },
      {
        name: 'Armenia',
        emoji: '🇦🇲',
        unicode: 'U+1F1E6 U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg',
      },
      {
        name: 'Angola',
        emoji: '🇦🇴',
        unicode: 'U+1F1E6 U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg',
      },
      {
        name: 'Antarctica',
        emoji: '🇦🇶',
        unicode: 'U+1F1E6 U+1F1F6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg',
      },
      {
        name: 'Argentina',
        emoji: '🇦🇷',
        unicode: 'U+1F1E6 U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg',
      },
      {
        name: 'American Samoa',
        emoji: '🇦🇸',
        unicode: 'U+1F1E6 U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg',
      },
      {
        name: 'Austria',
        emoji: '🇦🇹',
        unicode: 'U+1F1E6 U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg',
      },
      {
        name: 'Australia',
        emoji: '🇦🇺',
        unicode: 'U+1F1E6 U+1F1FA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg',
      },
      {
        name: 'Aruba',
        emoji: '🇦🇼',
        unicode: 'U+1F1E6 U+1F1FC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg',
      },
      {
        name: 'Åland Islands',
        emoji: '🇦🇽',
        unicode: 'U+1F1E6 U+1F1FD',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg',
      },
      {
        name: 'Azerbaijan',
        emoji: '🇦🇿',
        unicode: 'U+1F1E6 U+1F1FF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg',
      },
      {
        name: 'Bosnia & Herzegovina',
        emoji: '🇧🇦',
        unicode: 'U+1F1E7 U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg',
      },
      {
        name: 'Barbados',
        emoji: '🇧🇧',
        unicode: 'U+1F1E7 U+1F1E7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg',
      },
      {
        name: 'Bangladesh',
        emoji: '🇧🇩',
        unicode: 'U+1F1E7 U+1F1E9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg',
      },
      {
        name: 'Belgium',
        emoji: '🇧🇪',
        unicode: 'U+1F1E7 U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg',
      },
      {
        name: 'Burkina Faso',
        emoji: '🇧🇫',
        unicode: 'U+1F1E7 U+1F1EB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg',
      },
      {
        name: 'Bulgaria',
        emoji: '🇧🇬',
        unicode: 'U+1F1E7 U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg',
      },
      {
        name: 'Bahrain',
        emoji: '🇧🇭',
        unicode: 'U+1F1E7 U+1F1ED',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg',
      },
      {
        name: 'Burundi',
        emoji: '🇧🇮',
        unicode: 'U+1F1E7 U+1F1EE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg',
      },
      {
        name: 'Benin',
        emoji: '🇧🇯',
        unicode: 'U+1F1E7 U+1F1EF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg',
      },
      {
        name: 'St. Barthélemy',
        emoji: '🇧🇱',
        unicode: 'U+1F1E7 U+1F1F1',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg',
      },
      {
        name: 'Bermuda',
        emoji: '🇧🇲',
        unicode: 'U+1F1E7 U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg',
      },
      {
        name: 'Brunei',
        emoji: '🇧🇳',
        unicode: 'U+1F1E7 U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg',
      },
      {
        name: 'Bolivia',
        emoji: '🇧🇴',
        unicode: 'U+1F1E7 U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg',
      },
      {
        name: 'Caribbean Netherlands',
        emoji: '🇧🇶',
        unicode: 'U+1F1E7 U+1F1F6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg',
      },
      {
        name: 'Brazil',
        emoji: '🇧🇷',
        unicode: 'U+1F1E7 U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg',
      },
      {
        name: 'Bahamas',
        emoji: '🇧🇸',
        unicode: 'U+1F1E7 U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg',
      },
      {
        name: 'Bhutan',
        emoji: '🇧🇹',
        unicode: 'U+1F1E7 U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg',
      },
      {
        name: 'Bouvet Island',
        emoji: '🇧🇻',
        unicode: 'U+1F1E7 U+1F1FB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg',
      },
      {
        name: 'Botswana',
        emoji: '🇧🇼',
        unicode: 'U+1F1E7 U+1F1FC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg',
      },
      {
        name: 'Belarus',
        emoji: '🇧🇾',
        unicode: 'U+1F1E7 U+1F1FE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg',
      },
      {
        name: 'Belize',
        emoji: '🇧🇿',
        unicode: 'U+1F1E7 U+1F1FF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg',
      },
      {
        name: 'Canada',
        emoji: '🇨🇦',
        unicode: 'U+1F1E8 U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg',
      },
      {
        name: 'Cocos (Keeling) Islands',
        emoji: '🇨🇨',
        unicode: 'U+1F1E8 U+1F1E8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg',
      },
      {
        name: 'Congo - Kinshasa',
        emoji: '🇨🇩',
        unicode: 'U+1F1E8 U+1F1E9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg',
      },
      {
        name: 'Central African Republic',
        emoji: '🇨🇫',
        unicode: 'U+1F1E8 U+1F1EB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg',
      },
      {
        name: 'Congo - Brazzaville',
        emoji: '🇨🇬',
        unicode: 'U+1F1E8 U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg',
      },
      {
        name: 'Switzerland',
        emoji: '🇨🇭',
        unicode: 'U+1F1E8 U+1F1ED',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg',
      },
      {
        name: 'Côte d’Ivoire',
        emoji: '🇨🇮',
        unicode: 'U+1F1E8 U+1F1EE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg',
      },
      {
        name: 'Cook Islands',
        emoji: '🇨🇰',
        unicode: 'U+1F1E8 U+1F1F0',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg',
      },
      {
        name: 'Chile',
        emoji: '🇨🇱',
        unicode: 'U+1F1E8 U+1F1F1',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg',
      },
      {
        name: 'Cameroon',
        emoji: '🇨🇲',
        unicode: 'U+1F1E8 U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg',
      },
      {
        name: 'China',
        emoji: '🇨🇳',
        unicode: 'U+1F1E8 U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg',
      },
      {
        name: 'Colombia',
        emoji: '🇨🇴',
        unicode: 'U+1F1E8 U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg',
      },
      {
        name: 'Clipperton Island',
        emoji: '🇨🇵',
        unicode: 'U+1F1E8 U+1F1F5',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg',
      },
      {
        name: 'Costa Rica',
        emoji: '🇨🇷',
        unicode: 'U+1F1E8 U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg',
      },
      {
        name: 'Cuba',
        emoji: '🇨🇺',
        unicode: 'U+1F1E8 U+1F1FA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg',
      },
      {
        name: 'Cape Verde',
        emoji: '🇨🇻',
        unicode: 'U+1F1E8 U+1F1FB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg',
      },
      {
        name: 'Curaçao',
        emoji: '🇨🇼',
        unicode: 'U+1F1E8 U+1F1FC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg',
      },
      {
        name: 'Christmas Island',
        emoji: '🇨🇽',
        unicode: 'U+1F1E8 U+1F1FD',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg',
      },
      {
        name: 'Cyprus',
        emoji: '🇨🇾',
        unicode: 'U+1F1E8 U+1F1FE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg',
      },
      {
        name: 'Czechia',
        emoji: '🇨🇿',
        unicode: 'U+1F1E8 U+1F1FF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg',
      },
      {
        name: 'Germany',
        emoji: '🇩🇪',
        unicode: 'U+1F1E9 U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg',
      },
      {
        name: 'Diego Garcia',
        emoji: '🇩🇬',
        unicode: 'U+1F1E9 U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg',
      },
      {
        name: 'Djibouti',
        emoji: '🇩🇯',
        unicode: 'U+1F1E9 U+1F1EF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg',
      },
      {
        name: 'Denmark',
        emoji: '🇩🇰',
        unicode: 'U+1F1E9 U+1F1F0',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg',
      },
      {
        name: 'Dominica',
        emoji: '🇩🇲',
        unicode: 'U+1F1E9 U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg',
      },
      {
        name: 'Dominican Republic',
        emoji: '🇩🇴',
        unicode: 'U+1F1E9 U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg',
      },
      {
        name: 'Algeria',
        emoji: '🇩🇿',
        unicode: 'U+1F1E9 U+1F1FF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg',
      },
      {
        name: 'Ceuta & Melilla',
        emoji: '🇪🇦',
        unicode: 'U+1F1EA U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg',
      },
      {
        name: 'Ecuador',
        emoji: '🇪🇨',
        unicode: 'U+1F1EA U+1F1E8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg',
      },
      {
        name: 'Estonia',
        emoji: '🇪🇪',
        unicode: 'U+1F1EA U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg',
      },
      {
        name: 'Egypt',
        emoji: '🇪🇬',
        unicode: 'U+1F1EA U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg',
      },
      {
        name: 'Western Sahara',
        emoji: '🇪🇭',
        unicode: 'U+1F1EA U+1F1ED',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg',
      },
      {
        name: 'Eritrea',
        emoji: '🇪🇷',
        unicode: 'U+1F1EA U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg',
      },
      {
        name: 'Spain',
        emoji: '🇪🇸',
        unicode: 'U+1F1EA U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg',
      },
      {
        name: 'Ethiopia',
        emoji: '🇪🇹',
        unicode: 'U+1F1EA U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg',
      },
      {
        name: 'European Union',
        emoji: '🇪🇺',
        unicode: 'U+1F1EA U+1F1FA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg',
      },
      {
        name: 'Finland',
        emoji: '🇫🇮',
        unicode: 'U+1F1EB U+1F1EE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg',
      },
      {
        name: 'Fiji',
        emoji: '🇫🇯',
        unicode: 'U+1F1EB U+1F1EF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg',
      },
      {
        name: 'Falkland Islands',
        emoji: '🇫🇰',
        unicode: 'U+1F1EB U+1F1F0',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg',
      },
      {
        name: 'Micronesia',
        emoji: '🇫🇲',
        unicode: 'U+1F1EB U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg',
      },
      {
        name: 'Faroe Islands',
        emoji: '🇫🇴',
        unicode: 'U+1F1EB U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg',
      },
      {
        name: 'France',
        emoji: '🇫🇷',
        unicode: 'U+1F1EB U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg',
      },
      {
        name: 'Gabon',
        emoji: '🇬🇦',
        unicode: 'U+1F1EC U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg',
      },
      {
        name: 'United Kingdom',
        emoji: '🇬🇧',
        unicode: 'U+1F1EC U+1F1E7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg',
      },
      {
        name: 'Grenada',
        emoji: '🇬🇩',
        unicode: 'U+1F1EC U+1F1E9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg',
      },
      {
        name: 'Georgia',
        emoji: '🇬🇪',
        unicode: 'U+1F1EC U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg',
      },
      {
        name: 'French Guiana',
        emoji: '🇬🇫',
        unicode: 'U+1F1EC U+1F1EB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg',
      },
      {
        name: 'Guernsey',
        emoji: '🇬🇬',
        unicode: 'U+1F1EC U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg',
      },
      {
        name: 'Ghana',
        emoji: '🇬🇭',
        unicode: 'U+1F1EC U+1F1ED',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg',
      },
      {
        name: 'Gibraltar',
        emoji: '🇬🇮',
        unicode: 'U+1F1EC U+1F1EE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg',
      },
      {
        name: 'Greenland',
        emoji: '🇬🇱',
        unicode: 'U+1F1EC U+1F1F1',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg',
      },
      {
        name: 'Gambia',
        emoji: '🇬🇲',
        unicode: 'U+1F1EC U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg',
      },
      {
        name: 'Guinea',
        emoji: '🇬🇳',
        unicode: 'U+1F1EC U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg',
      },
      {
        name: 'Guadeloupe',
        emoji: '🇬🇵',
        unicode: 'U+1F1EC U+1F1F5',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg',
      },
      {
        name: 'Equatorial Guinea',
        emoji: '🇬🇶',
        unicode: 'U+1F1EC U+1F1F6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg',
      },
      {
        name: 'Greece',
        emoji: '🇬🇷',
        unicode: 'U+1F1EC U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg',
      },
      {
        name: 'South Georgia & South Sandwich Islands',
        emoji: '🇬🇸',
        unicode: 'U+1F1EC U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg',
      },
      {
        name: 'Guatemala',
        emoji: '🇬🇹',
        unicode: 'U+1F1EC U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg',
      },
      {
        name: 'Guam',
        emoji: '🇬🇺',
        unicode: 'U+1F1EC U+1F1FA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg',
      },
      {
        name: 'Guinea-Bissau',
        emoji: '🇬🇼',
        unicode: 'U+1F1EC U+1F1FC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg',
      },
      {
        name: 'Guyana',
        emoji: '🇬🇾',
        unicode: 'U+1F1EC U+1F1FE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg',
      },
      {
        name: 'Hong Kong SAR China',
        emoji: '🇭🇰',
        unicode: 'U+1F1ED U+1F1F0',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg',
      },
      {
        name: 'Heard & McDonald Islands',
        emoji: '🇭🇲',
        unicode: 'U+1F1ED U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg',
      },
      {
        name: 'Honduras',
        emoji: '🇭🇳',
        unicode: 'U+1F1ED U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg',
      },
      {
        name: 'Croatia',
        emoji: '🇭🇷',
        unicode: 'U+1F1ED U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg',
      },
      {
        name: 'Haiti',
        emoji: '🇭🇹',
        unicode: 'U+1F1ED U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg',
      },
      {
        name: 'Hungary',
        emoji: '🇭🇺',
        unicode: 'U+1F1ED U+1F1FA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg',
      },
      {
        name: 'Canary Islands',
        emoji: '🇮🇨',
        unicode: 'U+1F1EE U+1F1E8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg',
      },
      {
        name: 'Indonesia',
        emoji: '🇮🇩',
        unicode: 'U+1F1EE U+1F1E9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg',
      },
      {
        name: 'Ireland',
        emoji: '🇮🇪',
        unicode: 'U+1F1EE U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg',
      },
      {
        name: 'Israel',
        emoji: '🇮🇱',
        unicode: 'U+1F1EE U+1F1F1',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg',
      },
      {
        name: 'Isle of Man',
        emoji: '🇮🇲',
        unicode: 'U+1F1EE U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg',
      },
      {
        name: 'India',
        emoji: '🇮🇳',
        unicode: 'U+1F1EE U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
      },
      {
        name: 'British Indian Ocean Territory',
        emoji: '🇮🇴',
        unicode: 'U+1F1EE U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg',
      },
      {
        name: 'Iraq',
        emoji: '🇮🇶',
        unicode: 'U+1F1EE U+1F1F6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg',
      },
      {
        name: 'Iran',
        emoji: '🇮🇷',
        unicode: 'U+1F1EE U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg',
      },
      {
        name: 'Iceland',
        emoji: '🇮🇸',
        unicode: 'U+1F1EE U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg',
      },
      {
        name: 'Italy',
        emoji: '🇮🇹',
        unicode: 'U+1F1EE U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg',
      },
      {
        name: 'Jersey',
        emoji: '🇯🇪',
        unicode: 'U+1F1EF U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg',
      },
      {
        name: 'Jamaica',
        emoji: '🇯🇲',
        unicode: 'U+1F1EF U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg',
      },
      {
        name: 'Jordan',
        emoji: '🇯🇴',
        unicode: 'U+1F1EF U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg',
      },
      {
        name: 'Japan',
        emoji: '🇯🇵',
        unicode: 'U+1F1EF U+1F1F5',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg',
      },
      {
        name: 'Kenya',
        emoji: '🇰🇪',
        unicode: 'U+1F1F0 U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg',
      },
      {
        name: 'Kyrgyzstan',
        emoji: '🇰🇬',
        unicode: 'U+1F1F0 U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg',
      },
      {
        name: 'Cambodia',
        emoji: '🇰🇭',
        unicode: 'U+1F1F0 U+1F1ED',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg',
      },
      {
        name: 'Kiribati',
        emoji: '🇰🇮',
        unicode: 'U+1F1F0 U+1F1EE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg',
      },
      {
        name: 'Comoros',
        emoji: '🇰🇲',
        unicode: 'U+1F1F0 U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg',
      },
      {
        name: 'St. Kitts & Nevis',
        emoji: '🇰🇳',
        unicode: 'U+1F1F0 U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg',
      },
      {
        name: 'North Korea',
        emoji: '🇰🇵',
        unicode: 'U+1F1F0 U+1F1F5',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg',
      },
      {
        name: 'South Korea',
        emoji: '🇰🇷',
        unicode: 'U+1F1F0 U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg',
      },
      {
        name: 'Kuwait',
        emoji: '🇰🇼',
        unicode: 'U+1F1F0 U+1F1FC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg',
      },
      {
        name: 'Cayman Islands',
        emoji: '🇰🇾',
        unicode: 'U+1F1F0 U+1F1FE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg',
      },
      {
        name: 'Kazakhstan',
        emoji: '🇰🇿',
        unicode: 'U+1F1F0 U+1F1FF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg',
      },
      {
        name: 'Laos',
        emoji: '🇱🇦',
        unicode: 'U+1F1F1 U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg',
      },
      {
        name: 'Lebanon',
        emoji: '🇱🇧',
        unicode: 'U+1F1F1 U+1F1E7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg',
      },
      {
        name: 'St. Lucia',
        emoji: '🇱🇨',
        unicode: 'U+1F1F1 U+1F1E8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg',
      },
      {
        name: 'Liechtenstein',
        emoji: '🇱🇮',
        unicode: 'U+1F1F1 U+1F1EE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg',
      },
      {
        name: 'Sri Lanka',
        emoji: '🇱🇰',
        unicode: 'U+1F1F1 U+1F1F0',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg',
      },
      {
        name: 'Liberia',
        emoji: '🇱🇷',
        unicode: 'U+1F1F1 U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg',
      },
      {
        name: 'Lesotho',
        emoji: '🇱🇸',
        unicode: 'U+1F1F1 U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg',
      },
      {
        name: 'Lithuania',
        emoji: '🇱🇹',
        unicode: 'U+1F1F1 U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg',
      },
      {
        name: 'Luxembourg',
        emoji: '🇱🇺',
        unicode: 'U+1F1F1 U+1F1FA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg',
      },
      {
        name: 'Latvia',
        emoji: '🇱🇻',
        unicode: 'U+1F1F1 U+1F1FB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg',
      },
      {
        name: 'Libya',
        emoji: '🇱🇾',
        unicode: 'U+1F1F1 U+1F1FE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg',
      },
      {
        name: 'Morocco',
        emoji: '🇲🇦',
        unicode: 'U+1F1F2 U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg',
      },
      {
        name: 'Monaco',
        emoji: '🇲🇨',
        unicode: 'U+1F1F2 U+1F1E8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg',
      },
      {
        name: 'Moldova',
        emoji: '🇲🇩',
        unicode: 'U+1F1F2 U+1F1E9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg',
      },
      {
        name: 'Montenegro',
        emoji: '🇲🇪',
        unicode: 'U+1F1F2 U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg',
      },
      {
        name: 'St. Martin',
        emoji: '🇲🇫',
        unicode: 'U+1F1F2 U+1F1EB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg',
      },
      {
        name: 'Madagascar',
        emoji: '🇲🇬',
        unicode: 'U+1F1F2 U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg',
      },
      {
        name: 'Marshall Islands',
        emoji: '🇲🇭',
        unicode: 'U+1F1F2 U+1F1ED',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg',
      },
      {
        name: 'North Macedonia',
        emoji: '🇲🇰',
        unicode: 'U+1F1F2 U+1F1F0',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg',
      },
      {
        name: 'Mali',
        emoji: '🇲🇱',
        unicode: 'U+1F1F2 U+1F1F1',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg',
      },
      {
        name: 'Myanmar (Burma)',
        emoji: '🇲🇲',
        unicode: 'U+1F1F2 U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg',
      },
      {
        name: 'Mongolia',
        emoji: '🇲🇳',
        unicode: 'U+1F1F2 U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg',
      },
      {
        name: 'Macao SAR China',
        emoji: '🇲🇴',
        unicode: 'U+1F1F2 U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg',
      },
      {
        name: 'Northern Mariana Islands',
        emoji: '🇲🇵',
        unicode: 'U+1F1F2 U+1F1F5',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg',
      },
      {
        name: 'Martinique',
        emoji: '🇲🇶',
        unicode: 'U+1F1F2 U+1F1F6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg',
      },
      {
        name: 'Mauritania',
        emoji: '🇲🇷',
        unicode: 'U+1F1F2 U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg',
      },
      {
        name: 'Montserrat',
        emoji: '🇲🇸',
        unicode: 'U+1F1F2 U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg',
      },
      {
        name: 'Malta',
        emoji: '🇲🇹',
        unicode: 'U+1F1F2 U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg',
      },
      {
        name: 'Mauritius',
        emoji: '🇲🇺',
        unicode: 'U+1F1F2 U+1F1FA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg',
      },
      {
        name: 'Maldives',
        emoji: '🇲🇻',
        unicode: 'U+1F1F2 U+1F1FB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg',
      },
      {
        name: 'Malawi',
        emoji: '🇲🇼',
        unicode: 'U+1F1F2 U+1F1FC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg',
      },
      {
        name: 'Mexico',
        emoji: '🇲🇽',
        unicode: 'U+1F1F2 U+1F1FD',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg',
      },
      {
        name: 'Malaysia',
        emoji: '🇲🇾',
        unicode: 'U+1F1F2 U+1F1FE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg',
      },
      {
        name: 'Mozambique',
        emoji: '🇲🇿',
        unicode: 'U+1F1F2 U+1F1FF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg',
      },
      {
        name: 'Namibia',
        emoji: '🇳🇦',
        unicode: 'U+1F1F3 U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg',
      },
      {
        name: 'New Caledonia',
        emoji: '🇳🇨',
        unicode: 'U+1F1F3 U+1F1E8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg',
      },
      {
        name: 'Niger',
        emoji: '🇳🇪',
        unicode: 'U+1F1F3 U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg',
      },
      {
        name: 'Norfolk Island',
        emoji: '🇳🇫',
        unicode: 'U+1F1F3 U+1F1EB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg',
      },
      {
        name: 'Nigeria',
        emoji: '🇳🇬',
        unicode: 'U+1F1F3 U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg',
      },
      {
        name: 'Nicaragua',
        emoji: '🇳🇮',
        unicode: 'U+1F1F3 U+1F1EE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg',
      },
      {
        name: 'Netherlands',
        emoji: '🇳🇱',
        unicode: 'U+1F1F3 U+1F1F1',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg',
      },
      {
        name: 'Norway',
        emoji: '🇳🇴',
        unicode: 'U+1F1F3 U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg',
      },
      {
        name: 'Nepal',
        emoji: '🇳🇵',
        unicode: 'U+1F1F3 U+1F1F5',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg',
      },
      {
        name: 'Nauru',
        emoji: '🇳🇷',
        unicode: 'U+1F1F3 U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg',
      },
      {
        name: 'Niue',
        emoji: '🇳🇺',
        unicode: 'U+1F1F3 U+1F1FA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg',
      },
      {
        name: 'New Zealand',
        emoji: '🇳🇿',
        unicode: 'U+1F1F3 U+1F1FF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg',
      },
      {
        name: 'Oman',
        emoji: '🇴🇲',
        unicode: 'U+1F1F4 U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg',
      },
      {
        name: 'Panama',
        emoji: '🇵🇦',
        unicode: 'U+1F1F5 U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg',
      },
      {
        name: 'Peru',
        emoji: '🇵🇪',
        unicode: 'U+1F1F5 U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg',
      },
      {
        name: 'French Polynesia',
        emoji: '🇵🇫',
        unicode: 'U+1F1F5 U+1F1EB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg',
      },
      {
        name: 'Papua New Guinea',
        emoji: '🇵🇬',
        unicode: 'U+1F1F5 U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg',
      },
      {
        name: 'Philippines',
        emoji: '🇵🇭',
        unicode: 'U+1F1F5 U+1F1ED',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg',
      },
      {
        name: 'Pakistan',
        emoji: '🇵🇰',
        unicode: 'U+1F1F5 U+1F1F0',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg',
      },
      {
        name: 'Poland',
        emoji: '🇵🇱',
        unicode: 'U+1F1F5 U+1F1F1',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg',
      },
      {
        name: 'St. Pierre & Miquelon',
        emoji: '🇵🇲',
        unicode: 'U+1F1F5 U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg',
      },
      {
        name: 'Pitcairn Islands',
        emoji: '🇵🇳',
        unicode: 'U+1F1F5 U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg',
      },
      {
        name: 'Puerto Rico',
        emoji: '🇵🇷',
        unicode: 'U+1F1F5 U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg',
      },
      {
        name: 'Palestinian Territories',
        emoji: '🇵🇸',
        unicode: 'U+1F1F5 U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg',
      },
      {
        name: 'Portugal',
        emoji: '🇵🇹',
        unicode: 'U+1F1F5 U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg',
      },
      {
        name: 'Palau',
        emoji: '🇵🇼',
        unicode: 'U+1F1F5 U+1F1FC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg',
      },
      {
        name: 'Paraguay',
        emoji: '🇵🇾',
        unicode: 'U+1F1F5 U+1F1FE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg',
      },
      {
        name: 'Qatar',
        emoji: '🇶🇦',
        unicode: 'U+1F1F6 U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg',
      },
      {
        name: 'Réunion',
        emoji: '🇷🇪',
        unicode: 'U+1F1F7 U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg',
      },
      {
        name: 'Romania',
        emoji: '🇷🇴',
        unicode: 'U+1F1F7 U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg',
      },
      {
        name: 'Serbia',
        emoji: '🇷🇸',
        unicode: 'U+1F1F7 U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg',
      },
      {
        name: 'Russia',
        emoji: '🇷🇺',
        unicode: 'U+1F1F7 U+1F1FA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg',
      },
      {
        name: 'Rwanda',
        emoji: '🇷🇼',
        unicode: 'U+1F1F7 U+1F1FC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg',
      },
      {
        name: 'Saudi Arabia',
        emoji: '🇸🇦',
        unicode: 'U+1F1F8 U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg',
      },
      {
        name: 'Solomon Islands',
        emoji: '🇸🇧',
        unicode: 'U+1F1F8 U+1F1E7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg',
      },
      {
        name: 'Seychelles',
        emoji: '🇸🇨',
        unicode: 'U+1F1F8 U+1F1E8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg',
      },
      {
        name: 'Sudan',
        emoji: '🇸🇩',
        unicode: 'U+1F1F8 U+1F1E9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg',
      },
      {
        name: 'Sweden',
        emoji: '🇸🇪',
        unicode: 'U+1F1F8 U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg',
      },
      {
        name: 'Singapore',
        emoji: '🇸🇬',
        unicode: 'U+1F1F8 U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg',
      },
      {
        name: 'St. Helena',
        emoji: '🇸🇭',
        unicode: 'U+1F1F8 U+1F1ED',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg',
      },
      {
        name: 'Slovenia',
        emoji: '🇸🇮',
        unicode: 'U+1F1F8 U+1F1EE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg',
      },
      {
        name: 'Svalbard & Jan Mayen',
        emoji: '🇸🇯',
        unicode: 'U+1F1F8 U+1F1EF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg',
      },
      {
        name: 'Slovakia',
        emoji: '🇸🇰',
        unicode: 'U+1F1F8 U+1F1F0',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg',
      },
      {
        name: 'Sierra Leone',
        emoji: '🇸🇱',
        unicode: 'U+1F1F8 U+1F1F1',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg',
      },
      {
        name: 'San Marino',
        emoji: '🇸🇲',
        unicode: 'U+1F1F8 U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg',
      },
      {
        name: 'Senegal',
        emoji: '🇸🇳',
        unicode: 'U+1F1F8 U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg',
      },
      {
        name: 'Somalia',
        emoji: '🇸🇴',
        unicode: 'U+1F1F8 U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg',
      },
      {
        name: 'Suriname',
        emoji: '🇸🇷',
        unicode: 'U+1F1F8 U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg',
      },
      {
        name: 'South Sudan',
        emoji: '🇸🇸',
        unicode: 'U+1F1F8 U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg',
      },
      {
        name: 'São Tomé & Príncipe',
        emoji: '🇸🇹',
        unicode: 'U+1F1F8 U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg',
      },
      {
        name: 'El Salvador',
        emoji: '🇸🇻',
        unicode: 'U+1F1F8 U+1F1FB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg',
      },
      {
        name: 'Sint Maarten',
        emoji: '🇸🇽',
        unicode: 'U+1F1F8 U+1F1FD',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg',
      },
      {
        name: 'Syria',
        emoji: '🇸🇾',
        unicode: 'U+1F1F8 U+1F1FE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg',
      },
      {
        name: 'Eswatini',
        emoji: '🇸🇿',
        unicode: 'U+1F1F8 U+1F1FF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg',
      },
      {
        name: 'Tristan da Cunha',
        emoji: '🇹🇦',
        unicode: 'U+1F1F9 U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg',
      },
      {
        name: 'Turks & Caicos Islands',
        emoji: '🇹🇨',
        unicode: 'U+1F1F9 U+1F1E8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg',
      },
      {
        name: 'Chad',
        emoji: '🇹🇩',
        unicode: 'U+1F1F9 U+1F1E9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg',
      },
      {
        name: 'French Southern Territories',
        emoji: '🇹🇫',
        unicode: 'U+1F1F9 U+1F1EB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg',
      },
      {
        name: 'Togo',
        emoji: '🇹🇬',
        unicode: 'U+1F1F9 U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg',
      },
      {
        name: 'Thailand',
        emoji: '🇹🇭',
        unicode: 'U+1F1F9 U+1F1ED',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg',
      },
      {
        name: 'Tajikistan',
        emoji: '🇹🇯',
        unicode: 'U+1F1F9 U+1F1EF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg',
      },
      {
        name: 'Tokelau',
        emoji: '🇹🇰',
        unicode: 'U+1F1F9 U+1F1F0',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg',
      },
      {
        name: 'Timor-Leste',
        emoji: '🇹🇱',
        unicode: 'U+1F1F9 U+1F1F1',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg',
      },
      {
        name: 'Turkmenistan',
        emoji: '🇹🇲',
        unicode: 'U+1F1F9 U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg',
      },
      {
        name: 'Tunisia',
        emoji: '🇹🇳',
        unicode: 'U+1F1F9 U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg',
      },
      {
        name: 'Tonga',
        emoji: '🇹🇴',
        unicode: 'U+1F1F9 U+1F1F4',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg',
      },
      {
        name: 'Turkey',
        emoji: '🇹🇷',
        unicode: 'U+1F1F9 U+1F1F7',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg',
      },
      {
        name: 'Trinidad & Tobago',
        emoji: '🇹🇹',
        unicode: 'U+1F1F9 U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg',
      },
      {
        name: 'Tuvalu',
        emoji: '🇹🇻',
        unicode: 'U+1F1F9 U+1F1FB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg',
      },
      {
        name: 'Taiwan',
        emoji: '🇹🇼',
        unicode: 'U+1F1F9 U+1F1FC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg',
      },
      {
        name: 'Tanzania',
        emoji: '🇹🇿',
        unicode: 'U+1F1F9 U+1F1FF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg',
      },
      {
        name: 'Ukraine',
        emoji: '🇺🇦',
        unicode: 'U+1F1FA U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg',
      },
      {
        name: 'Uganda',
        emoji: '🇺🇬',
        unicode: 'U+1F1FA U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg',
      },
      {
        name: 'U.S. Outlying Islands',
        emoji: '🇺🇲',
        unicode: 'U+1F1FA U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg',
      },
      {
        name: 'United Nations',
        emoji: '🇺🇳',
        unicode: 'U+1F1FA U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg',
      },
      {
        name: 'United States',
        emoji: '🇺🇸',
        unicode: 'U+1F1FA U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
      },
      {
        name: 'Uruguay',
        emoji: '🇺🇾',
        unicode: 'U+1F1FA U+1F1FE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg',
      },
      {
        name: 'Uzbekistan',
        emoji: '🇺🇿',
        unicode: 'U+1F1FA U+1F1FF',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg',
      },
      {
        name: 'Vatican City',
        emoji: '🇻🇦',
        unicode: 'U+1F1FB U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg',
      },
      {
        name: 'St. Vincent & Grenadines',
        emoji: '🇻🇨',
        unicode: 'U+1F1FB U+1F1E8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg',
      },
      {
        name: 'Venezuela',
        emoji: '🇻🇪',
        unicode: 'U+1F1FB U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg',
      },
      {
        name: 'British Virgin Islands',
        emoji: '🇻🇬',
        unicode: 'U+1F1FB U+1F1EC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg',
      },
      {
        name: 'U.S. Virgin Islands',
        emoji: '🇻🇮',
        unicode: 'U+1F1FB U+1F1EE',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg',
      },
      {
        name: 'Vietnam',
        emoji: '🇻🇳',
        unicode: 'U+1F1FB U+1F1F3',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg',
      },
      {
        name: 'Vanuatu',
        emoji: '🇻🇺',
        unicode: 'U+1F1FB U+1F1FA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg',
      },
      {
        name: 'Wallis & Futuna',
        emoji: '🇼🇫',
        unicode: 'U+1F1FC U+1F1EB',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg',
      },
      {
        name: 'Samoa',
        emoji: '🇼🇸',
        unicode: 'U+1F1FC U+1F1F8',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg',
      },
      {
        name: 'Kosovo',
        emoji: '🇽🇰',
        unicode: 'U+1F1FD U+1F1F0',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg',
      },
      {
        name: 'Yemen',
        emoji: '🇾🇪',
        unicode: 'U+1F1FE U+1F1EA',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg',
      },
      {
        name: 'Mayotte',
        emoji: '🇾🇹',
        unicode: 'U+1F1FE U+1F1F9',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg',
      },
      {
        name: 'South Africa',
        emoji: '🇿🇦',
        unicode: 'U+1F1FF U+1F1E6',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg',
      },
      {
        name: 'Zambia',
        emoji: '🇿🇲',
        unicode: 'U+1F1FF U+1F1F2',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg',
      },
      {
        name: 'Zimbabwe',
        emoji: '🇿🇼',
        unicode: 'U+1F1FF U+1F1FC',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg',
      },
      {
        name: 'England',
        emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg',
      },
      {
        name: 'Scotland',
        emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg',
      },
      {
        name: 'Wales',
        emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
        unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F',
        image:
          'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg',
      },
    ])
  }

  return {
    getCountry,
  }
}
