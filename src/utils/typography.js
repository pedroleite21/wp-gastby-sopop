import Typography from "typography"

const typography = new Typography({
    googleFonts: [
        {
            name: 'Material Icons',
            styles: [
                '400'
            ]
        },
        {
          name: 'Raleway',
          styles: [
            '300',
            '400',
            '400i',
            '500',
            '600',
            `700`
          ],
        },
    ],
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Raleway', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Raleway', 'serif'],
    bodyColor: "hsla(0,0%, 0%, 0.9)",
    headerWeight:300,
    bodyWeight:400,
    boldWeight:700,
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm}, options) => ({
        body: {
            letterSpacing: "0.5px"
        },  
        a: {
            color: '#444',
            textDecoration: "underline"
        },
        "a:hover, a:active": {
            color: "#00838f",
        },
        "h3, h4, h5, h6" : {
            fontWeight:600,
        },
        h1: {
            ...scale(6 / 5),
            fontWeight:300,
            letterSpacing: "-1.5px"
        },
        h2: {
            fontWeight: 400,
            letterSpacing: "-0.5px"
        },
        h4: {
            letterSpacing: "-0.25px"
        },
        h6: {
            letterSpacing: "-0.15px"
        }

    })
    // See below for the full list of options.
  })

export default typography