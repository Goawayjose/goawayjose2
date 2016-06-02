/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "https://code.jquery.com/jquery-2.1.1.min.js",
            "http://cdn.edgecommons.org/an/1.4.0/js/min/EdgeCommons.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'designProcess_0032_WireframeIMG',
                            type: 'image',
                            rect: ['544px', '1616px', '1920px', '3214px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0032_WireframeIMG.png",'0px','0px'],
                            transform: [[],[],['-20']]
                        },
                        {
                            id: 'designProcess_0017_laptop_background',
                            type: 'image',
                            rect: ['-1px', '6270px', '1920px', '1909px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0017_laptop_background.png",'0px','0px']
                        },
                        {
                            id: 'testingBackground',
                            type: 'image',
                            rect: ['0px', '8015px', '1920px', '1985px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"testingBackground.png",'0px','0px']
                        },
                        {
                            id: 'Testing_Publishing2',
                            type: 'image',
                            rect: ['85px', '8167px', '1749px', '175px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Testing_Publishing2.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['3px', '8373px', '1137px', '1627px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.75)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'testingStripe',
                            type: 'image',
                            rect: ['-461px', '8382px', '1130px', '1618px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"testingStripe.png",'0px','0px']
                        },
                        {
                            id: 'testing_words',
                            type: 'image',
                            rect: ['38px', '8470px', '1074px', '1336px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"testing_words.png",'0px','0px']
                        },
                        {
                            id: 'laptop',
                            type: 'image',
                            rect: ['-7px', '3801px', '1920px', '4714px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"laptop.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0013_Conent_transparentWhite',
                            type: 'image',
                            rect: ['-7px', '6254px', '1920px', '814px', 'auto', 'auto'],
                            opacity: '0.50327190705854',
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0013_Conent_transparentWhite.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0012_Content_Stripes',
                            type: 'image',
                            rect: ['451px', '6259px', '1112px', '809px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0012_Content_Stripes.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0026_Idea_Background',
                            type: 'image',
                            rect: ['-7px', '1088px', '1920px', '1299px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0026_Idea_Background.png",'0px','0px']
                        },
                        {
                            id: 'CreateContentandDevelopeCode',
                            type: 'image',
                            rect: ['330px', '6334px', '1328px', '654px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CreateContentandDevelopeCode.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0025_TransparentWhite_under',
                            type: 'image',
                            rect: ['-1px', '1093px', '1113px', '809px', 'auto', 'auto'],
                            opacity: '0.44554619860445',
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0025_TransparentWhite_under.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0027_White_underlay_Wireframes',
                            type: 'image',
                            rect: ['5px', '2387px', '1250px', '672px', 'auto', 'auto'],
                            opacity: '0.79660790598291',
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0027_White_underlay_Wireframes.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0024_idea_Stripes',
                            type: 'image',
                            rect: ['245px', '1086px', '1113px', '809px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0024_idea_Stripes.png",'0px','0px']
                        },
                        {
                            id: 'ideaText',
                            type: 'image',
                            rect: ['21px', '1162px', '992px', '284px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ideaText.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0026_Idea_Background2',
                            type: 'image',
                            rect: ['-324px', '4662px', '2377px', '1608px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0026_Idea_Background.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0007_MoodBoard_transparent',
                            type: 'image',
                            rect: ['245px', '5466px', '1674px', '809px', 'auto', 'auto'],
                            opacity: '0.68029371738434',
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0007_MoodBoard_transparent.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0006_MoodStripe2',
                            type: 'image',
                            rect: ['-24px', '5466px', '1113px', '809px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0006_MoodStripe.png",'0px','0px']
                        },
                        {
                            id: 'bottomColor',
                            type: 'image',
                            rect: ['195px', '3593px', '555px', '3771px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bottomColor.png",'0px','0px'],
                            transform: [[],['54']]
                        },
                        {
                            id: 'MiddleColor2',
                            type: 'image',
                            rect: ['1194px', '2418px', '495px', '3760px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"MiddleColor.png",'0px','0px'],
                            transform: [[],['54']]
                        },
                        {
                            id: 'TopColor',
                            type: 'image',
                            rect: ['199px', '2142px', '989px', '3666px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"TopColor.png",'0px','0px'],
                            transform: [[],['55']]
                        },
                        {
                            id: 'designProcess_0003_-Mood-boards-are-used-to-design-the-theme-and-color-scheme-of-a',
                            type: 'image',
                            rect: ['403px', '5750px', '1471px', '456px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0003_-Mood-boards-are-used-to-design-the-theme-and-color-scheme-of-a.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0004_Mood-Boards',
                            type: 'image',
                            rect: ['716px', '5531px', '1147px', '134px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0004_Mood-Boards.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0022_Idea_img',
                            type: 'image',
                            rect: ['291px', '1421px', '1406px', '966px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0022_Idea_img.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0021_WireFrames_Square',
                            type: 'image',
                            rect: ['84px', '113px', '1920px', '12000px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0021_WireFrames_Square.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0020_Going-through-a-series-of-wireframes-helps-create-a-good-user-i',
                            type: 'image',
                            rect: ['30px', '2573px', '1199px', '376px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0020_Going-through-a-series-of-wireframes-helps-create-a-good-user-i.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0019_Wireframes',
                            type: 'image',
                            rect: ['30px', '2387px', '1037px', '136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0019_Wireframes.png",'0px','0px']
                        },
                        {
                            id: 'bulblight2',
                            type: 'image',
                            rect: ['922px', '1144px', '839px', '1277px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bulblight2.png",'0px','0px']
                        },
                        {
                            id: 'designProcess_0014_bulb',
                            type: 'image',
                            rect: ['1398px', '-839px', '190px', '1521px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"designProcess_0014_bulb.png",'0px','0px']
                        },
                        {
                            id: 'Process_of_Design',
                            type: 'image',
                            rect: ['419px', '178px', '690px', '655px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Process_of_Design.png",'0px','0px']
                        },
                        {
                            id: 'Emoji',
                            type: 'image',
                            rect: ['2046px', '8506px', '539px', '544px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Emoji.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '10000px', 'auto', 'auto'],
                            sizeRange: ['400px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid424",
                            "left",
                            0,
                            38,
                            "linear",
                            "${designProcess_0024_idea_Stripes}",
                            '245px',
                            '-1px'
                        ],
                        [
                            "eid493",
                            "top",
                            264,
                            147,
                            "linear",
                            "${Emoji}",
                            '8506px',
                            '8525px'
                        ],
                        [
                            "eid491",
                            "left",
                            264,
                            147,
                            "linear",
                            "${Emoji}",
                            '2046px',
                            '1234px'
                        ],
                        [
                            "eid430",
                            "top",
                            218,
                            59,
                            "linear",
                            "${designProcess_0012_Content_Stripes}",
                            '6259px',
                            '6275px'
                        ],
                        [
                            "eid125",
                            "left",
                            0,
                            19,
                            "linear",
                            "${designProcess_0022_Idea_img}",
                            '-284px',
                            '-289px'
                        ],
                        [
                            "eid115",
                            "left",
                            19,
                            19,
                            "linear",
                            "${designProcess_0022_Idea_img}",
                            '-289px',
                            '300px'
                        ],
                        [
                            "eid384",
                            "left",
                            38,
                            219,
                            "linear",
                            "${designProcess_0022_Idea_img}",
                            '300px',
                            '291px'
                        ],
                        [
                            "eid228",
                            "opacity",
                            38,
                            10,
                            "linear",
                            "${bulblight2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid224",
                            "opacity",
                            55,
                            0,
                            "linear",
                            "${bulblight2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "left",
                            0,
                            19,
                            "linear",
                            "${designProcess_0014_bulb}",
                            '1398px',
                            '1409px'
                        ],
                        [
                            "eid160",
                            "left",
                            38,
                            132,
                            "linear",
                            "${designProcess_0032_WireframeIMG}",
                            '544px',
                            '-694px'
                        ],
                        [
                            "eid158",
                            "left",
                            170,
                            0,
                            "linear",
                            "${designProcess_0032_WireframeIMG}",
                            '-694px',
                            '-694px'
                        ],
                        [
                            "eid426",
                            "top",
                            0,
                            38,
                            "linear",
                            "${designProcess_0024_idea_Stripes}",
                            '1086px',
                            '1088px'
                        ],
                        [
                            "eid164",
                            "top",
                            89,
                            117,
                            "linear",
                            "${TopColor}",
                            '2142px',
                            '2764px'
                        ],
                        [
                            "eid367",
                            "top",
                            114,
                            121,
                            "linear",
                            "${bottomColor}",
                            '2902px',
                            '3593px'
                        ],
                        [
                            "eid97",
                            "top",
                            0,
                            19,
                            "linear",
                            "${designProcess_0014_bulb}",
                            '-839px',
                            '102px'
                        ],
                        [
                            "eid159",
                            "top",
                            38,
                            132,
                            "linear",
                            "${designProcess_0032_WireframeIMG}",
                            '1616px',
                            '2712px'
                        ],
                        [
                            "eid156",
                            "top",
                            170,
                            0,
                            "linear",
                            "${designProcess_0032_WireframeIMG}",
                            '2712px',
                            '2712px'
                        ],
                        [
                            "eid123",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '10000px',
                            '10000px'
                        ],
                        [
                            "eid124",
                            "height",
                            750,
                            0,
                            "linear",
                            "${Stage}",
                            '10000px',
                            '10000px'
                        ],
                        [
                            "eid388",
                            "left",
                            179,
                            71,
                            "linear",
                            "${designProcess_0006_MoodStripe2}",
                            '-24px',
                            '815px'
                        ],
                        [
                            "eid45",
                            "skewX",
                            38,
                            0,
                            "linear",
                            "${designProcess_0032_WireframeIMG}",
                            '-20deg',
                            '-20deg'
                        ],
                        [
                            "eid362",
                            "left",
                            114,
                            112,
                            "linear",
                            "${MiddleColor2}",
                            '219px',
                            '1194px'
                        ],
                        [
                            "eid133",
                            "left",
                            48,
                            73,
                            "linear",
                            "${designProcess_0021_WireFrames_Square}",
                            '-348px',
                            '85px'
                        ],
                        [
                            "eid428",
                            "left",
                            218,
                            59,
                            "linear",
                            "${designProcess_0012_Content_Stripes}",
                            '451px',
                            '-6px'
                        ],
                        [
                            "eid364",
                            "top",
                            114,
                            112,
                            "linear",
                            "${MiddleColor2}",
                            '3143px',
                            '2418px'
                        ],
                        [
                            "eid389",
                            "top",
                            297,
                            0,
                            "linear",
                            "${designProcess_0006_MoodStripe2}",
                            '5466px',
                            '5466px'
                        ],
                        [
                            "eid163",
                            "left",
                            89,
                            117,
                            "linear",
                            "${TopColor}",
                            '1125px',
                            '220px'
                        ],
                        [
                            "eid385",
                            "left",
                            206,
                            51,
                            "linear",
                            "${TopColor}",
                            '220px',
                            '199px'
                        ],
                        [
                            "eid358",
                            "left",
                            114,
                            121,
                            "linear",
                            "${bottomColor}",
                            '1203px',
                            '195px'
                        ],
                        [
                            "eid386",
                            "top",
                            0,
                            257,
                            "linear",
                            "${designProcess_0021_WireFrames_Square}",
                            '107px',
                            '113px'
                        ],
                        [
                            "eid415",
                            "top",
                            264,
                            46,
                            "linear",
                            "${laptop}",
                            '3801px',
                            '3400px'
                        ],
                        [
                            "eid420",
                            "left",
                            277,
                            101,
                            "linear",
                            "${testingStripe}",
                            '-461px',
                            '10px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("designProcess_edgeActions.js");
})("EDGE-6610156");
