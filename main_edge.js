/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg1Copy',
                type: 'image',
                rect: ['2px', '0px','1920px','1080px','auto', 'auto'],
                clip: ['rect(0px 1920px 1080px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"bg1.png",'0px','0px']
            },
            {
                id: 'home12Copy',
                type: 'image',
                rect: ['0px', '292px','1920px','900px','auto', 'auto'],
                clip: ['rect(0px 1920px 900px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"home1.jpg",'0px','0px']
            },
            {
                id: 'helloCopy',
                type: 'rect',
                rect: ['823', '767','auto','auto','auto', 'auto'],
                clip: ['rect(0px 1755px 242px 0px)']
            },
            {
                id: 'RoundRect2',
                type: 'rect',
                rect: ['404px', '0px','1060px','76px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(255,255,255,0.64)"],
                stroke: [1,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'monkeybg3',
                type: 'image',
                rect: ['0px', '355px','1920px','843px','auto', 'auto'],
                clip: ['rect(101px 1920px 805px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"monkeybg3.jpg",'0px','0px']
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['2px', '940px','1920px','541px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [1,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'skyblue',
                type: 'image',
                rect: ['1px', '-14px','1921px','1147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"skyblue.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['254px', '368px','423px','123px','auto', 'auto'],
                text: "HERALD",
                font: ['Lucida Console, Monaco, monospace', 100, "rgba(124,124,124,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['261px', '530px','380px','102px','auto', 'auto'],
                text: "东南大学先声网",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 53, "rgba(124,124,124,1)", "400", "none", "normal"]
            },
            {
                id: 'skyleft',
                type: 'image',
                rect: ['-68px', '550px','2016px','1344px','auto', 'auto'],
                clip: ['rect(0px 2016px 1344px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"skyleft.png",'0px','0px']
            },
            {
                id: 'skyright',
                type: 'image',
                rect: ['-68px', '550px','2016px','1344px','auto', 'auto'],
                clip: ['rect(0px 2016px 1344px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"skyright.png",'0px','0px']
            },
            {
                id: 'logoCopy2',
                type: 'rect',
                rect: ['815px', '26px','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['2px', '940px','1920px','541px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [1,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'blue',
                type: 'image',
                rect: ['2px', '169px','1920px','1080px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blue.png",'0px','0px']
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['1020px', '822px','575px','76px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(185,185,185,0.39)"],
                stroke: [1,"rgb(0, 0, 0)","none"],
                filter: [0, 0, 1, 0.72602739726027, 0, 0, 0, 38, "rgba(0,0,0,0)", 0, 0, 0]
            }],
            symbolInstances: [
            {
                id: 'logoCopy2',
                symbolName: 'logo',
                autoPlay: {

                }
            },
            {
                id: 'helloCopy',
                symbolName: 'hello',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_logoCopy2}": [
                ["motion", "location", '1202.705078125px 408.58837890625px'],
                ["subproperty", "filter.blur", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_helloCopy}": [
                ["style", "top", '437px'],
                ["transform", "scaleX", '1.00645'],
                ["style", "clip", [242,1827,242,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '38px']
            ],
            "${_Text2}": [
                ["style", "height", '102px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "font-size", '53px'],
                ["style", "width", '380px']
            ],
            "${_blue}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '1080px'],
                ["style", "left", '1px'],
                ["style", "height", '1280px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(124,124,124,1.00)'],
                ["style", "height", '123px'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "font-size", '100px'],
                ["style", "width", '423px']
            ],
            "${_skyblue}": [
                ["style", "top", '-14px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["style", "width", '1921px']
            ],
            "${_skyright}": [
                ["style", "top", '4px'],
                ["transform", "scaleY", '0.96'],
                ["transform", "scaleX", '1.2'],
                ["style", "left", '-755px'],
                ["style", "clip", [1173,2016,1344,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(255,0,127,1.00)'],
                ["style", "top", '1080px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '1920px']
            ],
            "${_monkeybg3}": [
                ["style", "top", '359px'],
                ["style", "clip", [725,1920,805,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_bg1Copy}": [
                ["style", "top", '0px'],
                ["style", "bottom", 'auto'],
                ["style", "right", 'auto'],
                ["style", "left", '0px'],
                ["style", "clip", [0,1920,1080,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(185,185,185,0.54)'],
                ["subproperty", "filter.saturate", '0.72602739726027'],
                ["style", "width", '501px'],
                ["style", "top", '883px'],
                ["subproperty", "filter.blur", '38px'],
                ["style", "left", '970px'],
                ["subproperty", "filter.drop-shadow.offsetH", '0px']
            ],
            "${_home12Copy}": [
                ["style", "top", '270px'],
                ["style", "left", '0px'],
                ["style", "clip", [813,1920,900,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1080px'],
                ["style", "width", '1920px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,255,207,1.00)'],
                ["style", "top", '1080px'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '1920px']
            ],
            "${_RoundRect2}": [
                ["color", "background-color", 'rgba(255,255,255,0.64)'],
                ["style", "height", '76px']
            ],
            "${_skyleft}": [
                ["style", "top", '4px'],
                ["transform", "scaleY", '0.96'],
                ["transform", "scaleX", '1.2'],
                ["style", "left", '-754px'],
                ["style", "clip", [1173,2016,1344,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6134,
            autoPlay: true,
            labels: {
                "Label 1": 0
            },
            timeline: [
                { id: "eid660", tween: [ "transform", "${_logoCopy2}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 370 },
                { id: "eid661", tween: [ "transform", "${_logoCopy2}", "scaleX", '0.15639', { fromValue: '0.8'}], position: 370, duration: 350 },
                { id: "eid2183", tween: [ "transform", "${_skyleft}", "scaleX", '1.1', { fromValue: '1.2'}], position: 1000, duration: 680 },
                { id: "eid10", tween: [ "style", "${_bg1Copy}", "top", '-61px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid1991", tween: [ "transform", "${_skyright}", "scaleY", '0.96', { fromValue: '0.96'}], position: 1000, duration: 0 },
                { id: "eid1992", tween: [ "transform", "${_skyright}", "scaleY", '0.96', { fromValue: '0.96'}], position: 2500, duration: 0 },
                { id: "eid606", tween: [ "style", "${_monkeybg3}", "top", '351px', { fromValue: '359px'}], position: 1500, duration: 500 },
                { id: "eid607", tween: [ "style", "${_monkeybg3}", "top", '-189px', { fromValue: '351px'}], position: 2000, duration: 500 },
                { id: "eid608", tween: [ "style", "${_monkeybg3}", "top", '-739px', { fromValue: '-189px'}], position: 2500, duration: 500 },
                { id: "eid609", tween: [ "style", "${_monkeybg3}", "top", '-814px', { fromValue: '-739px'}], position: 3000, duration: 95 },
                { id: "eid1564", tween: [ "style", "${_helloCopy}", "left", '44px', { fromValue: '38px'}], position: 440, duration: 545 },
                { id: "eid951", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(182,182,182,0.83)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(185,185,185,0.54)'}], position: 0, duration: 125 },
                { id: "eid1390", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(180,180,180,0.44)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(182,182,182,0.83)'}], position: 125, duration: 45 },
                { id: "eid1353", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(180,180,180,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(180,180,180,0.44)'}], position: 170, duration: 40 },
                { id: "eid775", tween: [ "style", "${_home12Copy}", "top", '181px', { fromValue: '270px'}], position: 0, duration: 500 },
                { id: "eid776", tween: [ "style", "${_home12Copy}", "top", '0px', { fromValue: '181px'}], position: 500, duration: 500 },
                { id: "eid777", tween: [ "style", "${_home12Copy}", "top", '-270px', { fromValue: '0px'}], position: 1000, duration: 1000 },
                { id: "eid778", tween: [ "style", "${_home12Copy}", "top", '-914px', { fromValue: '-270px'}], position: 2000, duration: 105 },
                { id: "eid658", tween: [ "transform", "${_logoCopy2}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 370 },
                { id: "eid659", tween: [ "transform", "${_logoCopy2}", "scaleY", '0.15639', { fromValue: '0.8'}], position: 370, duration: 350 },
                { id: "eid1193", tween: [ "style", "${_Ellipse}", "left", '970px', { fromValue: '970px'}], position: 0, duration: 0 },
                { id: "eid1266", tween: [ "style", "${_Ellipse}", "top", '822px', { fromValue: '883px'}], position: 0, duration: 1000 },
                { id: "eid1651", tween: [ "transform", "${_skyleft}", "scaleY", '0.96', { fromValue: '0.96'}], position: 1000, duration: 0 },
                { id: "eid1652", tween: [ "transform", "${_skyleft}", "scaleY", '0.96', { fromValue: '0.96'}], position: 2500, duration: 0 },
                { id: "eid610", tween: [ "style", "${_monkeybg3}", "clip", [186,1920,805,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [725,1920,805,0]}], position: 1500, duration: 500 },
                { id: "eid605", tween: [ "color", "${_RectangleCopy}", "background-color", 'rgba(255,0,127,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,127,1.00)'}], position: 3000, duration: 0 },
                { id: "eid1675", tween: [ "style", "${_blue}", "top", '540px', { fromValue: '1080px'}], position: 500, duration: 500 },
                { id: "eid1676", tween: [ "style", "${_blue}", "top", '0px', { fromValue: '540px'}], position: 1000, duration: 500 },
                { id: "eid1677", tween: [ "style", "${_blue}", "top", '-545px', { fromValue: '0px'}], position: 1500, duration: 500 },
                { id: "eid1678", tween: [ "style", "${_blue}", "top", '-1282px', { fromValue: '-545px'}], position: 2000, duration: 500 },
                { id: "eid1633", tween: [ "style", "${_skyright}", "top", '-94px', { fromValue: '4px'}], position: 1000, duration: 680 },
                { id: "eid2185", tween: [ "style", "${_skyright}", "top", '-221px', { fromValue: '-94px'}], position: 1680, duration: 820 },
                { id: "eid2255", tween: [ "style", "${_skyright}", "top", '-159px', { fromValue: '-221px'}], position: 2500, duration: 280 },
                { id: "eid1926", tween: [ "style", "${_skyright}", "left", '-196px', { fromValue: '-755px'}], position: 1000, duration: 680 },
                { id: "eid2120", tween: [ "style", "${_skyright}", "left", '2px', { fromValue: '-196px'}], position: 1680, duration: 820 },
                { id: "eid2254", tween: [ "style", "${_skyright}", "left", '43px', { fromValue: '2px'}], position: 2500, duration: 280 },
                { id: "eid2256", tween: [ "style", "${_skyright}", "left", '484px', { fromValue: '43px'}], position: 2780, duration: 796 },
                { id: "eid1098", tween: [ "motion", "${_logoCopy2}", [[1202.71, 408.59, 0, 0],[1075, 791.3, -831.02, 161.51, -699.58, 135.97],[737.94, 388, 0, 0]]], position: 0, duration: 720 },
                { id: "eid1137", tween: [ "motion", "${_logoCopy2}", [[737.94, 388, 0, 0],[726.24, 299.1, 0, 0]]], position: 720, duration: 265 },
                { id: "eid1138", tween: [ "motion", "${_logoCopy2}", [[726.24, 299.1, 0, 0],[722, 216.65, 0, 0]]], position: 985, duration: 190 },
                { id: "eid2236", tween: [ "motion", "${_logoCopy2}", [[722, 216.65, 0, 0],[722, 299.45, 0, 0]]], position: 1175, duration: 75 },
                { id: "eid2238", tween: [ "motion", "${_logoCopy2}", [[722, 299.45, 0, 0],[722, 532.33, 0, 0]]], position: 1250, duration: 515 },
                { id: "eid2239", tween: [ "motion", "${_logoCopy2}", [[722, 532.33, 0, 0],[1116.87, 532.33, 0, 0]]], position: 1765, duration: 735 },
                { id: "eid773", tween: [ "style", "${_home12Copy}", "clip", [360,1920,900,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [813,1920,900,0]}], position: 0, duration: 500 },
                { id: "eid774", tween: [ "style", "${_home12Copy}", "clip", [0,1920,900,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [360,1920,900,0]}], position: 500, duration: 500 },
                { id: "eid12", tween: [ "style", "${_bg1Copy}", "clip", [0,1920,573,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1920,1080,0]}], position: 0, duration: 500 },
                { id: "eid28", tween: [ "style", "${_bg1Copy}", "clip", [0,1920,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1920,573,0]}], position: 500, duration: 500 },
                { id: "eid11", tween: [ "style", "${_bg1Copy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1729", tween: [ "style", "${_blue}", "left", '1px', { fromValue: '1px'}], position: 500, duration: 0 },
                { id: "eid756", tween: [ "style", "${_helloCopy}", "clip", [0,1827,242,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [242,1827,242,0]}], position: 370, duration: 285 },
                { id: "eid2182", tween: [ "transform", "${_skyright}", "scaleX", '1.1', { fromValue: '1.2'}], position: 1000, duration: 680 },
                { id: "eid1661", tween: [ "style", "${_skyleft}", "clip", [611,2016,1344,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1173,2016,1344,0]}], position: 500, duration: 500 },
                { id: "eid1659", tween: [ "style", "${_skyleft}", "clip", [0,2016,1344,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [611,2016,1344,0]}], position: 1000, duration: 585 },
                { id: "eid599", tween: [ "style", "${_Rectangle}", "top", '540px', { fromValue: '1080px'}], position: 500, duration: 500 },
                { id: "eid600", tween: [ "style", "${_Rectangle}", "top", '0px', { fromValue: '540px'}], position: 1000, duration: 500 },
                { id: "eid601", tween: [ "style", "${_Rectangle}", "top", '-546px', { fromValue: '0px'}], position: 1500, duration: 500 },
                { id: "eid1563", tween: [ "transform", "${_helloCopy}", "scaleX", '1.00645', { fromValue: '1.00645'}], position: 985, duration: 0 },
                { id: "eid1166", tween: [ "style", "${_Ellipse}", "width", '501px', { fromValue: '501px'}], position: 0, duration: 0 },
                { id: "eid2253", tween: [ "style", "${_skyblue}", "opacity", '1', { fromValue: '0'}], position: 2355, duration: 145 },
                { id: "eid1662", tween: [ "style", "${_skyright}", "clip", [611,2016,1344,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1173,2016,1344,0]}], position: 500, duration: 500 },
                { id: "eid1660", tween: [ "style", "${_skyright}", "clip", [0,2016,1344,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [611,2016,1344,0]}], position: 1000, duration: 585 },
                { id: "eid1634", tween: [ "style", "${_skyleft}", "top", '-94px', { fromValue: '4px'}], position: 1000, duration: 680 },
                { id: "eid2184", tween: [ "style", "${_skyleft}", "top", '-221px', { fromValue: '-94px'}], position: 1680, duration: 820 },
                { id: "eid602", tween: [ "style", "${_RectangleCopy}", "top", '540px', { fromValue: '1080px'}], position: 1500, duration: 500 },
                { id: "eid603", tween: [ "style", "${_RectangleCopy}", "top", '0px', { fromValue: '540px'}], position: 2000, duration: 500 },
                { id: "eid604", tween: [ "style", "${_RectangleCopy}", "top", '-540px', { fromValue: '0px'}], position: 2500, duration: 500 },
                { id: "eid1839", tween: [ "style", "${_blue}", "height", '1280px', { fromValue: '1280px'}], position: 500, duration: 0 },
                { id: "eid1927", tween: [ "style", "${_skyleft}", "left", '-196px', { fromValue: '-754px'}], position: 1000, duration: 680 },
                { id: "eid2121", tween: [ "style", "${_skyleft}", "left", '4px', { fromValue: '-196px'}], position: 1680, duration: 820 },
                { id: "eid2318", tween: [ "style", "${_skyleft}", "left", '-771px', { fromValue: '4px'}], position: 2750, duration: 825 },
                { id: "eid750", tween: [ "style", "${_helloCopy}", "top", '247px', { fromValue: '437px'}], position: 440, duration: 560 },
                { id: "eid751", tween: [ "style", "${_helloCopy}", "top", '58px', { fromValue: '247px'}], position: 1000, duration: 680 }            ]
        }
    }
},
"logo": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-96px', '-96px', '963px', '957px', 'auto', 'auto'],
                    id: 'Group',
                    type: 'group',
                    transform: [[0, 0], [], [], ['0.8', '0.8']],
                    c: [
                    {
                        id: 'Herald_logo2',
                        type: 'image',
                        rect: ['146px', '177px', '511px', '408px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/Herald_logo.png', '0px', '0px']
                    },
                    {
                        rect: ['146px', '177px', '511px', '408px', 'auto', 'auto'],
                        transform: [[0, 0], ['-13']],
                        id: 'Herald_logo2Copy',
                        opacity: 0.75,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/Herald_logo.png', '0px', '0px']
                    },
                    {
                        rect: ['146px', '177px', '511px', '408px', 'auto', 'auto'],
                        transform: [[0, 0], ['-26']],
                        id: 'Herald_logo2Copy2',
                        opacity: 0.5,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/Herald_logo.png', '0px', '0px']
                    },
                    {
                        rect: ['146px', '177px', '511px', '408px', 'auto', 'auto'],
                        transform: [[0, 0], ['-39']],
                        id: 'Herald_logo2Copy3',
                        opacity: 0.25,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/Herald_logo.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['-1'], [], ['0.19', '0.19']],
                        id: 'logo',
                        type: 'image',
                        rect: ['-1289px', '-1433px', '3508px', '3691px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/logo.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['-1'], [], ['0.19', '0.19']],
                        id: 'logoCopy4',
                        type: 'image',
                        rect: ['-1289px', '-1433px', '3508px', '3691px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/logo.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['-1'], [], ['0.19', '0.19']],
                        id: 'logoCopy3',
                        type: 'image',
                        rect: ['-1289px', '-1433px', '3508px', '3691px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/logo.png', '0px', '0px']
                    }]
                },
                {
                    id: 'logo24',
                    type: 'image',
                    rect: ['177px', '97px', '433px', '524px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/logo2.png', '0px', '0px']
                },
                {
                    id: 'logo24Copy2',
                    type: 'image',
                    rect: ['177px', '97px', '433px', '524px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/logo2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-12deg'],
                ["transform", "scaleX", '0.14'],
                ["style", "opacity", '0'],
                ["style", "left", '-1331px'],
                ["style", "width", '3649px'],
                ["style", "top", '-1025px'],
                ["transform", "scaleY", '0.14'],
                ["style", "height", '2914px']
            ],
            "${_Herald_logo2Copy3}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-6deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '237px'],
                ["style", "width", '511px'],
                ["style", "top", '228px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '408px']
            ],
            "${_Herald_logo2Copy2}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-2deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '237px'],
                ["style", "width", '511px'],
                ["style", "top", '228px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '408px']
            ],
            "${_logo24}": [
                ["style", "top", '97px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '524px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '177px'],
                ["style", "width", '433px']
            ],
            "${_logoCopy4}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-17deg'],
                ["transform", "scaleX", '0.14'],
                ["style", "opacity", '0'],
                ["style", "left", '-1332px'],
                ["style", "width", '3649px'],
                ["style", "top", '-1025px'],
                ["transform", "scaleY", '0.14'],
                ["style", "height", '2914px']
            ],
            "${_logo24Copy2}": [
                ["style", "top", '97px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '524px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '177px'],
                ["style", "width", '433px']
            ],
            "${symbolSelector}": [
                ["style", "height", '766px'],
                ["style", "width", '770px']
            ],
            "${_logoCopy3}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-20deg'],
                ["transform", "scaleX", '0.14'],
                ["style", "opacity", '0'],
                ["style", "left", '-1331px'],
                ["style", "width", '3649px'],
                ["style", "top", '-1025px'],
                ["transform", "scaleY", '0.14'],
                ["style", "height", '2914px']
            ],
            "${_Herald_logo2}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '228px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '408px'],
                ["style", "opacity", '1'],
                ["style", "left", '237px'],
                ["style", "width", '511px']
            ],
            "${_Herald_logo2Copy}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '237px'],
                ["style", "width", '511px'],
                ["style", "top", '228px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '408px']
            ],
            "${_Group}": [
                ["style", "top", '-96px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '1'],
                ["style", "left", '-96px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4385,
            autoPlay: true,
            timeline: [
                { id: "eid452", tween: [ "transform", "${_logoCopy4}", "scaleX", '0.14', { fromValue: '0.14'}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid462", tween: [ "style", "${_logoCopy4}", "left", '-1332px', { fromValue: '-1332px'}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid456", tween: [ "transform", "${_logoCopy4}", "scaleY", '0.14', { fromValue: '0.14'}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid139", tween: [ "style", "${_Herald_logo2Copy3}", "left", '237px', { fromValue: '237px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid154", tween: [ "style", "${_Herald_logo2Copy3}", "left", '237px', { fromValue: '237px'}], position: 2445, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2458", tween: [ "style", "${_Group}", "opacity", '0', { fromValue: '1'}], position: 2475, duration: 25, easing: "easeInOutQuad" },
                { id: "eid450", tween: [ "style", "${_logoCopy3}", "height", '2914px', { fromValue: '2914px'}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid145", tween: [ "style", "${_Herald_logo2Copy2}", "left", '237px', { fromValue: '237px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid155", tween: [ "style", "${_Herald_logo2Copy2}", "left", '237px', { fromValue: '237px'}], position: 2445, duration: 0, easing: "easeInOutQuad" },
                { id: "eid453", tween: [ "style", "${_logoCopy4}", "opacity", '0.5', { fromValue: '0'}], position: 958, duration: 1214, easing: "easeInOutQuad" },
                { id: "eid144", tween: [ "style", "${_Herald_logo2Copy}", "top", '228px', { fromValue: '228px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid466", tween: [ "style", "${_logoCopy3}", "left", '-1331px', { fromValue: '-1331px'}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid447", tween: [ "style", "${_logoCopy3}", "opacity", '0.25', { fromValue: '0'}], position: 1184, duration: 1316, easing: "easeInOutQuad" },
                { id: "eid457", tween: [ "style", "${_logoCopy4}", "height", '2914px', { fromValue: '2914px'}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid451", tween: [ "transform", "${_logoCopy4}", "rotateZ", '-65deg', { fromValue: '-17deg'}], position: 958, duration: 1214, easing: "easeInOutQuad" },
                { id: "eid14", tween: [ "style", "${_Herald_logo2Copy3}", "opacity", '0.25', { fromValue: '0'}], position: 435, duration: 930, easing: "easeInOutQuad" },
                { id: "eid20", tween: [ "transform", "${_Herald_logo2Copy}", "rotateZ", '-13deg', { fromValue: '0deg'}], position: 0, duration: 705, easing: "easeInOutQuad" },
                { id: "eid159", tween: [ "transform", "${_logo}", "rotateZ", '-52deg', { fromValue: '-12deg'}], position: 705, duration: 1031, easing: "easeInOutQuad" },
                { id: "eid405", tween: [ "style", "${_logo}", "top", '-1025px', { fromValue: '-1025px'}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid449", tween: [ "transform", "${_logoCopy3}", "scaleY", '0.14', { fromValue: '0.14'}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid340", tween: [ "transform", "${_logo}", "scaleX", '0.14', { fromValue: '0.14'}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid716", tween: [ "transform", "${_logo24}", "scaleX", '1.35', { fromValue: '1'}], position: 2500, duration: 1885, easing: "easeOutQuad" },
                { id: "eid2489", tween: [ "style", "${_logo24Copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 2475, duration: 25, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "style", "${_logo}", "opacity", '0.75', { fromValue: '0'}], position: 705, duration: 1031, easing: "easeInOutQuad" },
                { id: "eid140", tween: [ "style", "${_Herald_logo2Copy3}", "top", '228px', { fromValue: '228px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid141", tween: [ "style", "${_Herald_logo2}", "left", '237px', { fromValue: '237px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid157", tween: [ "style", "${_Herald_logo2}", "left", '237px', { fromValue: '237px'}], position: 2445, duration: 0, easing: "easeInOutQuad" },
                { id: "eid448", tween: [ "style", "${_logoCopy3}", "width", '3649px', { fromValue: '3649px'}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid467", tween: [ "style", "${_logoCopy3}", "top", '-1025px', { fromValue: '-1025px'}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid461", tween: [ "style", "${_logoCopy4}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2344", tween: [ "style", "${_logoCopy4}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2345", tween: [ "style", "${_logoCopy4}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2346", tween: [ "style", "${_logoCopy4}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2347", tween: [ "style", "${_logoCopy4}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid407", tween: [ "style", "${_logo}", "left", '-1331px', { fromValue: '-1331px'}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid143", tween: [ "style", "${_Herald_logo2Copy}", "left", '237px', { fromValue: '237px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid156", tween: [ "style", "${_Herald_logo2Copy}", "left", '237px', { fromValue: '237px'}], position: 2445, duration: 0, easing: "easeInOutQuad" },
                { id: "eid454", tween: [ "style", "${_logoCopy4}", "width", '3649px', { fromValue: '3649px'}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid445", tween: [ "transform", "${_logoCopy3}", "rotateZ", '-78deg', { fromValue: '-20deg'}], position: 1184, duration: 1316, easing: "easeInOutQuad" },
                { id: "eid146", tween: [ "style", "${_Herald_logo2Copy2}", "top", '228px', { fromValue: '228px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid16", tween: [ "style", "${_Herald_logo2Copy2}", "opacity", '0.5', { fromValue: '0'}], position: 190, duration: 866, easing: "easeInOutQuad" },
                { id: "eid711", tween: [ "style", "${_logo24}", "opacity", '0.39838598373984', { fromValue: '0.000000'}], position: 2500, duration: 50, easing: "easeInQuad" },
                { id: "eid712", tween: [ "style", "${_logo24}", "opacity", '0', { fromValue: '0.39838598373984'}], position: 2550, duration: 1835, easing: "easeInOutQuad" },
                { id: "eid411", tween: [ "style", "${_logoCopy3}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2348", tween: [ "style", "${_logoCopy3}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2349", tween: [ "style", "${_logoCopy3}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2350", tween: [ "style", "${_logoCopy3}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2351", tween: [ "style", "${_logoCopy3}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid19", tween: [ "transform", "${_Herald_logo2Copy3}", "rotateZ", '-39deg', { fromValue: '-6deg'}], position: 435, duration: 930, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "transform", "${_Herald_logo2Copy2}", "rotateZ", '-26deg', { fromValue: '-2deg'}], position: 190, duration: 866, easing: "easeInOutQuad" },
                { id: "eid406", tween: [ "style", "${_logo}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2352", tween: [ "style", "${_logo}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2353", tween: [ "style", "${_logo}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2354", tween: [ "style", "${_logo}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid2355", tween: [ "style", "${_logo}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid142", tween: [ "style", "${_Herald_logo2}", "top", '228px', { fromValue: '228px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid398", tween: [ "style", "${_logo}", "height", '2914px', { fromValue: '2914px'}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid341", tween: [ "transform", "${_logo}", "scaleY", '0.14', { fromValue: '0.14'}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid717", tween: [ "transform", "${_logo24}", "scaleY", '1.35', { fromValue: '1'}], position: 2500, duration: 1885, easing: "easeOutQuad" },
                { id: "eid463", tween: [ "style", "${_logoCopy4}", "top", '-1025px', { fromValue: '-1025px'}], position: 958, duration: 0, easing: "easeInOutQuad" },
                { id: "eid446", tween: [ "transform", "${_logoCopy3}", "scaleX", '0.14', { fromValue: '0.14'}], position: 1184, duration: 0, easing: "easeInOutQuad" },
                { id: "eid401", tween: [ "style", "${_logo}", "width", '3649px', { fromValue: '3649px'}], position: 705, duration: 0, easing: "easeInOutQuad" },
                { id: "eid15", tween: [ "style", "${_Herald_logo2Copy}", "opacity", '0.75', { fromValue: '1'}], position: 0, duration: 705, easing: "easeInOutQuad" }            ]
        }
    }
},
"hello": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ball',
                    type: 'rect',
                    rect: ['0px', '163px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    id: 'Text',
                    text: 'always with you',
                    type: 'text',
                    rect: ['483px', '35px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    id: 'TextCopy',
                    text: 'herald 2014',
                    type: 'text',
                    rect: ['483px', '35px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'ballCopy',
                    type: 'rect',
                    rect: ['0px', '163px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['1103px', '236px', '13px', '7px', 'auto', 'auto'],
                    borderRadius: ['60% 60%', '60% 60%', '60% 60%', '60% 60%'],
                    transform: [[0, 0], [], [], ['0.83', '0.83']],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['1100px', '228px', '21px', '6px', 'auto', 'auto'],
                    borderRadius: ['258px 258px', '258px 258px', '211px 211px', '258px 258px'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['1095px', '217px', '29px', '6px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'RoundRectCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'ballCopy',
                symbolName: 'ball',
                autoPlay: {

               }
            },
            {
                id: 'ball',
                symbolName: 'ball',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_RoundRectCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '6px'],
                ["style", "opacity", '0'],
                ["style", "left", '1095px'],
                ["style", "top", '217px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "left", '1101px'],
                ["style", "width", '18px'],
                ["style", "top", '227px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "skewX", '0deg'],
                ["style", "height", '6px'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '462px'],
                ["style", "top", '35px']
            ],
            "${symbolSelector}": [
                ["style", "height", '257px'],
                ["style", "width", '1866px']
            ],
            "${_ballCopy}": [
                ["style", "top", '163px'],
                ["style", "left", '0px']
            ],
            "${_ball}": [
                ["style", "top", '163px'],
                ["style", "left", '0px']
            ],
            "${_TextCopy}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '483px'],
                ["style", "top", '35px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [60,60], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [60,60], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '0.83'],
                ["style", "opacity", '0.000000'],
                ["style", "border-top-right-radius", [60,60], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "top", '236px'],
                ["style", "border-bottom-left-radius", [60,60], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '0.83'],
                ["style", "height", '7px'],
                ["style", "left", '1103px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6134,
            autoPlay: true,
            timeline: [
                { id: "eid183", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 131, duration: 369 },
                { id: "eid196", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 425 },
                { id: "eid200", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 2223, duration: 369 },
                { id: "eid199", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 3592, duration: 425 },
                { id: "eid133", tween: [ "style", "${_TextCopy}", "top", '0px', { fromValue: '35px'}], position: 0, duration: 3000 },
                { id: "eid178", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 325 },
                { id: "eid189", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 1337, duration: 478 },
                { id: "eid201", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0.000000'}], position: 2092, duration: 325 },
                { id: "eid202", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 3429, duration: 478 },
                { id: "eid182", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0'}], position: 199, duration: 556 },
                { id: "eid187", tween: [ "style", "${_RoundRectCopy}", "opacity", '0', { fromValue: '1'}], position: 1637, duration: 367 },
                { id: "eid197", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0'}], position: 2291, duration: 556 },
                { id: "eid198", tween: [ "style", "${_RoundRectCopy}", "opacity", '0', { fromValue: '1'}], position: 3729, duration: 367 },
                { id: "eid134", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1380 },
                { id: "eid135", tween: [ "style", "${_TextCopy}", "opacity", '0', { fromValue: '1'}], position: 1380, duration: 1620 },
                { id: "eid136", tween: [ "style", "${_Text}", "left", '462px', { fromValue: '462px'}], position: 3664, duration: 0 },
                { id: "eid131", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 3091, duration: 1338 },
                { id: "eid132", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 4429, duration: 1571 },
                { id: "eid129", tween: [ "style", "${_Text}", "top", '0px', { fromValue: '35px'}], position: 3091, duration: 2909 },
                { id: "eid124", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_ballCopy}', [] ], ""], position: 920 },
                { id: "eid137", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ball}', [] ], ""], position: 2223 },
                { id: "eid203", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ballCopy}', [] ], ""], position: 2223 },
                { id: "eid204", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_ballCopy}', [] ], ""], position: 3133.1148556901 },
                { id: "eid205", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ball}', [] ], ""], position: 4294 },
                { id: "eid206", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_ballCopy}', [] ], ""], position: 4294 },
                { id: "eid207", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_ballCopy}', [] ], ""], position: 5213.9395852063 }            ]
        }
    }
},
"ball": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['35px', '6px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['34px', '6px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    id: 'EllipseCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['34px', '6px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    id: 'EllipseCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['34px', '6px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    id: 'EllipseCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['34px', '6px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    id: 'EllipseCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['34px', '6px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    id: 'EllipseCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['34px', '6px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    id: 'EllipseCopy6',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['34px', '6px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    id: 'EllipseCopy7',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['34px', '6px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    id: 'EllipseCopy8',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['34px', '6px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    id: 'EllipseCopy9',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '18px'],
                ["style", "width", '1755px']
            ],
            "${_EllipseCopy6}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '541px'],
                ["style", "width", '12px'],
                ["style", "top", '22px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '12px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_EllipseCopy3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '1287px'],
                ["style", "width", '12px'],
                ["style", "top", '22px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '12px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_EllipseCopy9}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '1444px'],
                ["style", "width", '12px'],
                ["style", "top", '22px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '12px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_EllipseCopy7}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '401px'],
                ["style", "width", '12px'],
                ["style", "top", '22px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '12px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_EllipseCopy4}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '1183px'],
                ["style", "width", '12px'],
                ["style", "top", '22px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '12px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_EllipseCopy8}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '149px'],
                ["style", "width", '12px'],
                ["style", "top", '22px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '12px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_EllipseCopy5}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '673px'],
                ["style", "width", '12px'],
                ["style", "top", '22px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '12px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '79px'],
                ["style", "width", '12px'],
                ["style", "top", '22px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '12px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_EllipseCopy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '1755px'],
                ["style", "width", '12px'],
                ["style", "top", '22px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '12px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "width", '12px'],
                ["style", "top", '22px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1.03'],
                ["style", "height", '12px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1815,
            autoPlay: true,
            timeline: [
                { id: "eid122", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1.03', { fromValue: '1.03'}], position: 1079, duration: 0 },
                { id: "eid37", tween: [ "style", "${_EllipseCopy8}", "left", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_EllipseCopy4}", "left", '1191px', { fromValue: '1183px'}], position: 0, duration: 1750 },
                { id: "eid11", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 823 },
                { id: "eid12", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '1'}], position: 823, duration: 823 },
                { id: "eid26", tween: [ "style", "${_EllipseCopy7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 720 },
                { id: "eid27", tween: [ "style", "${_EllipseCopy7}", "opacity", '0', { fromValue: '1'}], position: 720, duration: 720 },
                { id: "eid8", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 653 },
                { id: "eid9", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 653, duration: 653 },
                { id: "eid84", tween: [ "transform", "${_EllipseCopy8}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 1645 },
                { id: "eid25", tween: [ "style", "${_EllipseCopy7}", "top", '6px', { fromValue: '22px'}], position: 0, duration: 1440 },
                { id: "eid32", tween: [ "style", "${_EllipseCopy9}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 698 },
                { id: "eid33", tween: [ "style", "${_EllipseCopy9}", "opacity", '0', { fromValue: '1'}], position: 698, duration: 698 },
                { id: "eid65", tween: [ "style", "${_EllipseCopy2}", "left", '1743px', { fromValue: '1755px'}], position: 0, duration: 1645 },
                { id: "eid64", tween: [ "style", "${_Ellipse}", "left", '0px', { fromValue: '5px'}], position: 0, duration: 1500 },
                { id: "eid68", tween: [ "style", "${_EllipseCopy5}", "left", '663px', { fromValue: '673px'}], position: 0, duration: 1540 },
                { id: "eid66", tween: [ "style", "${_EllipseCopy3}", "left", '1281px', { fromValue: '1287px'}], position: 0, duration: 1540 },
                { id: "eid23", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 798 },
                { id: "eid24", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 798, duration: 798 },
                { id: "eid17", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 875 },
                { id: "eid18", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 875 },
                { id: "eid90", tween: [ "transform", "${_EllipseCopy3}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 1540 },
                { id: "eid102", tween: [ "transform", "${_EllipseCopy2}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 1645 },
                { id: "eid43", tween: [ "style", "${_EllipseCopy}", "left", '87px', { fromValue: '79px'}], position: 0, duration: 1305 },
                { id: "eid2", tween: [ "style", "${_Ellipse}", "top", '6px', { fromValue: '22px'}], position: 0, duration: 1500 },
                { id: "eid22", tween: [ "style", "${_EllipseCopy6}", "top", '6px', { fromValue: '22px'}], position: 0, duration: 1595 },
                { id: "eid123", tween: [ "transform", "${_EllipseCopy2}", "scaleY", '1.03', { fromValue: '1.03'}], position: 1645, duration: 0 },
                { id: "eid120", tween: [ "transform", "${_Ellipse}", "scaleY", '1.03', { fromValue: '1.03'}], position: 1500, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid6", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 750 },
                { id: "eid88", tween: [ "transform", "${_EllipseCopy9}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 1395 },
                { id: "eid69", tween: [ "style", "${_EllipseCopy6}", "left", '547px', { fromValue: '541px'}], position: 0, duration: 1595 },
                { id: "eid117", tween: [ "transform", "${_EllipseCopy3}", "scaleY", '1.03', { fromValue: '1.03'}], position: 1540, duration: 0 },
                { id: "eid115", tween: [ "transform", "${_EllipseCopy5}", "scaleY", '1.03', { fromValue: '1.03'}], position: 1540, duration: 0 },
                { id: "eid20", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 770 },
                { id: "eid21", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 770, duration: 770 },
                { id: "eid16", tween: [ "style", "${_EllipseCopy4}", "top", '6px', { fromValue: '22px'}], position: 0, duration: 1750 },
                { id: "eid116", tween: [ "transform", "${_EllipseCopy9}", "scaleY", '1.03', { fromValue: '1.03'}], position: 1395, duration: 0 },
                { id: "eid114", tween: [ "transform", "${_EllipseCopy8}", "scaleY", '1.03', { fromValue: '1.03'}], position: 1645, duration: 0 },
                { id: "eid100", tween: [ "transform", "${_EllipseCopy}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 1079 },
                { id: "eid86", tween: [ "transform", "${_EllipseCopy5}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 1540 },
                { id: "eid38", tween: [ "style", "${_EllipseCopy7}", "left", '401px', { fromValue: '401px'}], position: 0, duration: 0 },
                { id: "eid121", tween: [ "transform", "${_EllipseCopy6}", "scaleY", '1.03', { fromValue: '1.03'}], position: 1595, duration: 0 },
                { id: "eid10", tween: [ "style", "${_EllipseCopy2}", "top", '6px', { fromValue: '22px'}], position: 0, duration: 1645 },
                { id: "eid98", tween: [ "transform", "${_EllipseCopy6}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 1595 },
                { id: "eid7", tween: [ "style", "${_EllipseCopy}", "top", '0px', { fromValue: '22px'}], position: 0, duration: 1305 },
                { id: "eid119", tween: [ "transform", "${_EllipseCopy7}", "scaleY", '1.03', { fromValue: '1.03'}], position: 1440, duration: 0 },
                { id: "eid94", tween: [ "transform", "${_EllipseCopy7}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 1440 },
                { id: "eid96", tween: [ "transform", "${_Ellipse}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 1500 },
                { id: "eid28", tween: [ "style", "${_EllipseCopy8}", "top", '6px', { fromValue: '22px'}], position: 0, duration: 1645 },
                { id: "eid29", tween: [ "style", "${_EllipseCopy8}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 823 },
                { id: "eid30", tween: [ "style", "${_EllipseCopy8}", "opacity", '0', { fromValue: '1'}], position: 823, duration: 823 },
                { id: "eid31", tween: [ "style", "${_EllipseCopy9}", "top", '6px', { fromValue: '22px'}], position: 0, duration: 1395 },
                { id: "eid57", tween: [ "style", "${_EllipseCopy9}", "left", '1444px', { fromValue: '1444px'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "transform", "${_EllipseCopy4}", "scaleX", '1.03', { fromValue: '1'}], position: 0, duration: 1815 },
                { id: "eid118", tween: [ "transform", "${_EllipseCopy4}", "scaleY", '1.03', { fromValue: '1.03'}], position: 1815, duration: 0 },
                { id: "eid72", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 720 },
                { id: "eid73", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 720, duration: 820 },
                { id: "eid13", tween: [ "style", "${_EllipseCopy3}", "top", '6px', { fromValue: '22px'}], position: 0, duration: 1540 },
                { id: "eid19", tween: [ "style", "${_EllipseCopy5}", "top", '6px', { fromValue: '22px'}], position: 0, duration: 1540 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "main");
