$(document).ready(function () {
    // markList:
    // {"cfxfkebf8mh":{"id":"cfxfkebf8mh","type":"village","x":"10056","z":"-1384"},"j38xxqa26w":{"id":"j38xxqa26w","type":"village","x":"10056","z":"-888"},"02ldrjqqjmrf":{"id":"02ldrjqqjmrf","type":"village","x":"9560","z":"-392"},"n780jwlvmxb":{"id":"n780jwlvmxb","type":"village","x":"10120","z":"-344"},"hxjzfvbzeb":{"id":"hxjzfvbzeb","type":"village","x":"10424","z":"-152"},"fvyfu5480yj":{"id":"fvyfu5480yj","type":"village","x":"11112","z":"-856"},"zccxypcow6":{"id":"zccxypcow6","type":"village","x":"11144","z":"40"},"mgd6ox354fe":{"id":"mgd6ox354fe","type":"village","x":"9944","z":"248"},"spt7nxic8zt":{"id":"spt7nxic8zt","type":"village","x":"9336","z":"840"},"zwnw0a0y1d":{"id":"zwnw0a0y1d","type":"pillagerOutpost","x":"9592","z":"280"},"2q1i2mobd1e":{"id":"2q1i2mobd1e","type":"pillagerOutpost","x":"10952","z":"-872"},"jbc9f0kjgar":{"id":"jbc9f0kjgar","type":"ancientCity","x":"10072","z":"-1064"},"nod1qqltb18":{"id":"nod1qqltb18","type":"ancientCity","x":"10504","z":"-968"},"clb7j3cvidn":{"id":"clb7j3cvidn","type":"ancientCity","x":"9416","z":"-648"},"j8xg1v7cc2a":{"id":"j8xg1v7cc2a","type":"ancientCity","x":"9768","z":"-632"},"p30psop6rv":{"id":"p30psop6rv","type":"ancientCity","x":"10504","z":"-696"},"aa86a04ydge":{"id":"aa86a04ydge","type":"ancientCity","x":"10856","z":"-648"},"pxj6byq7itn":{"id":"pxj6byq7itn","type":"ancientCity","x":"10840","z":"-312"},"yejpvbpfk4j":{"id":"yejpvbpfk4j","type":"ancientCity","x":"11208","z":"-296"},"jiadv4ngg3":{"id":"jiadv4ngg3","type":"ancientCity","x":"10088","z":"472"},"ckciu954839":{"id":"ckciu954839","type":"ancientCity","x":"10152","z":"-696"},"diy1pphbs8f":{"id":"diy1pphbs8f","type":"shipwreck","x":"9048","z":"-904"},"4a5dz4jhnm8":{"id":"4a5dz4jhnm8","type":"shipwreck","x":"9128","z":"-1288"},"c3jbus6cvbs":{"id":"c3jbus6cvbs","type":"shipwreck","x":"9096","z":"-1704"},"gk13rcbpc5o":{"id":"gk13rcbpc5o","type":"shipwreck","x":"9288","z":"-1816"},"ylq6dxp4vvj":{"id":"ylq6dxp4vvj","type":"shipwreck","x":"9736","z":"-1864"},"vj5rru8sakr":{"id":"vj5rru8sakr","type":"shipwreck","x":"10088","z":"-1608"},"b2qnjaja774":{"id":"b2qnjaja774","type":"shipwreck","x":"9624","z":"424"},"2m62eud36jp":{"id":"2m62eud36jp","type":"shipwreck","x":"9496","z":"792"},"gjg01dez19e":{"id":"gjg01dez19e","type":"portal","x":"9192","z":"-1784"},"75jjufveom":{"id":"75jjufveom","type":"portal","x":"9800","z":"-1576"},"hb6y09adykh":{"id":"hb6y09adykh","type":"portal","x":"9256","z":"-1192"},"c8gbmhml46f":{"id":"c8gbmhml46f","type":"portal","x":"9688","z":"-1096"},"p1w0b8f15n8":{"id":"p1w0b8f15n8","type":"portal","x":"10440","z":"-1080"},"de14ijidym":{"id":"de14ijidym","type":"portal","x":"10936","z":"-1192"},"oxr3nadxwz":{"id":"oxr3nadxwz","type":"portal","x":"9064","z":"-264"},"ugignremz79":{"id":"ugignremz79","type":"portal","x":"9944","z":"-488"},"2qfm55h4ioq":{"id":"2qfm55h4ioq","type":"portal","x":"10328","z":"-520"},"ymbz3mc90zk":{"id":"ymbz3mc90zk","type":"portal","x":"10984","z":"-600"},"m1iptxef6pc":{"id":"m1iptxef6pc","type":"portal","x":"9256","z":"216"},"5b1462rxzs":{"id":"5b1462rxzs","type":"portal","x":"9736","z":"104"},"4r1asvglaau":{"id":"4r1asvglaau","type":"portal","x":"10280","z":"264"},"mx9aovfbek":{"id":"mx9aovfbek","type":"portal","x":"11080","z":"72"},"gszj4qml6z7":{"id":"gszj4qml6z7","type":"portal","x":"9304","z":"760"},"vr5xiqf1ip":{"id":"vr5xiqf1ip","type":"portal","x":"9896","z":"792"},"dd972ve5j3k":{"id":"dd972ve5j3k","type":"portal","x":"8632","z":"280"},"4risopt4hte":{"id":"4risopt4hte","type":"portal","x":"11192","z":"888"},"xyeppw824j":{"id":"xyeppw824j","type":"portal","x":"10360","z":"936"},"lzofohrd26n":{"id":"lzofohrd26n","type":"shipwreck","x":"10984","z":"952"},"8l26p3qrzyn":{"id":"8l26p3qrzyn","type":"smallRuin","x":"9096","z":"-1160"},"ajs0dq53ei":{"id":"ajs0dq53ei","type":"smallRuin","x":"9288","z":"-1256"},"pzwhztnlrm":{"id":"pzwhztnlrm","type":"smallRuin","x":"8968","z":"-1544"},"olqfe2kjurc":{"id":"olqfe2kjurc","type":"smallRuin","x":"9144","z":"-1896"},"cbqwj7gfbxl":{"id":"cbqwj7gfbxl","type":"largeRuin","x":"9336","z":"-1848"},"rjg17moyl5":{"id":"rjg17moyl5","type":"largeRuin","x":"9624","z":"-1784"},"y60cof8cnia":{"id":"y60cof8cnia","type":"smallRuin","x":"10040","z":"-1768"},"8tjjc3uyjow":{"id":"8tjjc3uyjow","type":"smallRuin","x":"10392","z":"-1496"},"i1nhyc6ujw8":{"id":"i1nhyc6ujw8","type":"smallRuin","x":"11016","z":"1064"},"dypqfmjo6ek":{"id":"dypqfmjo6ek","type":"largeRuin","x":"10568","z":"968"},"bwukou0qwsc":{"id":"bwukou0qwsc","type":"smallRuin","x":"9768","z":"792"},"u23sq2thi8":{"id":"u23sq2thi8","type":"smallRuin","x":"9736","z":"456"},"ipywof83tz":{"id":"ipywof83tz","type":"smallRuin","x":"9464","z":"728"},"2z7cjwwaxnl":{"id":"2z7cjwwaxnl","type":"smallRuin","x":"10744","z":"-1496"}}

    // svgInfo:
    // {"minX":"8143","maxX":"12034","minZ":"-2153","maxZ":"1215"}

    // polyList
    // {"3ecqx5ni0ty":{"id":"3ecqx5ni0ty","coords":{"0":{"x":9728,"z":-894},"1":{"x":9813,"z":-930},"2":{"x":9843,"z":-900},"3":{"x":9916,"z":-918},"4":{"x":9934,"z":-942},"5":{"x":9970,"z":-972},"6":{"x":9946,"z":-1003},"7":{"x":9958,"z":-1027},"8":{"x":9970,"z":-1051},"9":{"x":9952,"z":-1063},"10":{"x":9952,"z":-1118},"11":{"x":9982,"z":-1148},"12":{"x":10055,"z":-1124},"13":{"x":10121,"z":-1178},"14":{"x":10164,"z":-1148},"15":{"x":10145,"z":-1099},"16":{"x":10127,"z":-1075},"17":{"x":10133,"z":-1021},"18":{"x":10121,"z":-966},"19":{"x":10115,"z":-912},"20":{"x":10012,"z":-924},"21":{"x":9946,"z":-924},"22":{"x":9916,"z":-887},"23":{"x":9843,"z":-869},"24":{"x":9795,"z":-857},"25":{"x":9758,"z":-845}},"color":"#808080"},"q5dmzt0dt0m":{"id":"q5dmzt0dt0m","coords":{"0":{"x":10212,"z":-997},"1":{"x":10218,"z":-1063},"2":{"x":10291,"z":-1154},"3":{"x":10315,"z":-1215},"4":{"x":10357,"z":-1196},"5":{"x":10448,"z":-1263},"6":{"x":10466,"z":-1251},"7":{"x":10490,"z":-1318},"8":{"x":10569,"z":-1215},"9":{"x":10593,"z":-1221},"10":{"x":10617,"z":-1221},"11":{"x":10690,"z":-1233},"12":{"x":10708,"z":-1190},"13":{"x":10745,"z":-1184},"14":{"x":10769,"z":-1130},"15":{"x":10775,"z":-1081},"16":{"x":10714,"z":-1027},"17":{"x":10648,"z":-1075},"18":{"x":10569,"z":-1093},"19":{"x":10496,"z":-1118},"20":{"x":10424,"z":-1087},"21":{"x":10333,"z":-1045},"22":{"x":10291,"z":-978},"23":{"x":10218,"z":-990}},"color":"#808080"},"6vttlsh22yb":{"id":"6vttlsh22yb","coords":{"0":{"x":10430,"z":-512},"1":{"x":10496,"z":-476},"2":{"x":10503,"z":-421},"3":{"x":10563,"z":-342},"4":{"x":10533,"z":-306},"5":{"x":10490,"z":-282},"6":{"x":10454,"z":-251},"7":{"x":10375,"z":-257},"8":{"x":10351,"z":-288},"9":{"x":10351,"z":-348},"10":{"x":10339,"z":-385},"11":{"x":10369,"z":-457}},"color":"#808080"},"f7m5cpnto16":{"id":"f7m5cpnto16","coords":{"0":{"x":10067,"z":-185},"1":{"x":10079,"z":-136},"2":{"x":10121,"z":-94},"3":{"x":10170,"z":-70},"4":{"x":10188,"z":-9},"5":{"x":10024,"z":45},"6":{"x":9970,"z":27},"7":{"x":9934,"z":51},"8":{"x":9849,"z":-9},"9":{"x":9885,"z":-94},"10":{"x":9982,"z":-155},"11":{"x":9946,"z":-136},"12":{"x":9994,"z":-167}},"color":"#808080"},"gr9p9vh1ext":{"id":"gr9p9vh1ext","coords":{"0":{"x":9371,"z":-348},"1":{"x":9498,"z":-264},"2":{"x":9510,"z":-185},"3":{"x":9468,"z":-142},"4":{"x":9474,"z":-106},"5":{"x":9504,"z":-76},"6":{"x":9552,"z":-100},"7":{"x":9595,"z":-88},"8":{"x":9704,"z":9},"9":{"x":9734,"z":130},"10":{"x":9704,"z":173},"11":{"x":9631,"z":239},"12":{"x":9595,"z":203},"13":{"x":9613,"z":136},"14":{"x":9571,"z":94},"15":{"x":9444,"z":70},"16":{"x":9389,"z":-88},"17":{"x":9353,"z":-106},"18":{"x":9316,"z":-221},"19":{"x":9329,"z":-312},"20":{"x":9359,"z":-348}},"color":"#808080"},"86zy2c367a3":{"id":"86zy2c367a3","coords":{"0":{"x":9416,"z":85},"1":{"x":9446,"z":270},"2":{"x":9405,"z":352},"3":{"x":9344,"z":373},"4":{"x":9292,"z":342},"5":{"x":9303,"z":229},"6":{"x":9344,"z":177},"7":{"x":9364,"z":106}},"color":"#808080"},"u732jdvcuv":{"id":"u732jdvcuv","coords":{"0":{"x":10350,"z":-829},"1":{"x":10370,"z":-716},"2":{"x":10555,"z":-675},"3":{"x":10555,"z":-624},"4":{"x":10463,"z":-603},"5":{"x":10452,"z":-665},"6":{"x":10350,"z":-634},"7":{"x":10288,"z":-634},"8":{"x":10186,"z":-603},"9":{"x":10155,"z":-572},"10":{"x":10103,"z":-634},"11":{"x":10175,"z":-767},"12":{"x":10268,"z":-767},"13":{"x":10309,"z":-829}},"color":"#808080"},"vxykj1hlwd":{"id":"vxykj1hlwd","coords":{"0":{"x":9970,"z":-469},"1":{"x":10021,"z":-428},"2":{"x":10021,"z":-346},"3":{"x":9970,"z":-326},"4":{"x":9888,"z":-367},"5":{"x":9847,"z":-428},"6":{"x":9878,"z":-469},"7":{"x":9919,"z":-490}},"color":"#808080"},"oon7n74kw9h":{"id":"oon7n74kw9h","coords":{"0":{"x":10678,"z":-315},"1":{"x":10760,"z":-315},"2":{"x":10884,"z":-428},"3":{"x":10966,"z":-469},"4":{"x":11058,"z":-367},"5":{"x":11017,"z":-326},"6":{"x":10853,"z":-213},"7":{"x":10802,"z":-213},"8":{"x":10760,"z":-274},"9":{"x":10730,"z":-264}},"color":"#808080"},"sksdcc5b9tm":{"id":"sksdcc5b9tm","coords":{"0":{"x":9272,"z":-675},"1":{"x":9364,"z":-695},"2":{"x":9436,"z":-613},"3":{"x":9405,"z":-552},"4":{"x":9344,"z":-541},"5":{"x":9303,"z":-582},"6":{"x":9251,"z":-572},"7":{"x":9200,"z":-572},"8":{"x":9251,"z":-654},"9":{"x":9241,"z":-685},"10":{"x":9169,"z":-685},"11":{"x":9200,"z":-757},"12":{"x":9282,"z":-685}},"color":"#808080"},"stztxe0lq5g":{"id":"stztxe0lq5g","coords":{"0":{"x":9724,"z":-377},"1":{"x":9734,"z":-295},"2":{"x":9652,"z":-315},"3":{"x":9652,"z":-346},"4":{"x":9693,"z":-377}},"color":"#808080"},"xad4059i0f":{"id":"xad4059i0f","coords":{"0":{"x":9908,"z":434},"1":{"x":9980,"z":444},"2":{"x":10144,"z":331},"3":{"x":10227,"z":414},"4":{"x":10093,"z":465},"5":{"x":10011,"z":485}},"color":"#808080"},"sn8ergzzj4":{"id":"sn8ergzzj4","coords":{"0":{"x":10394,"z":276},"1":{"x":10412,"z":227},"2":{"x":10406,"z":203},"3":{"x":10436,"z":173},"4":{"x":10400,"z":154},"5":{"x":10357,"z":179},"6":{"x":10363,"z":209},"7":{"x":10375,"z":270}},"color":"#808080"},"ao1q5xd15y4":{"id":"ao1q5xd15y4","coords":{"0":{"x":10636,"z":-155},"1":{"x":10696,"z":-100},"2":{"x":10660,"z":15},"3":{"x":10617,"z":45},"4":{"x":10630,"z":82},"5":{"x":10593,"z":100},"6":{"x":10533,"z":21},"7":{"x":10539,"z":-76},"8":{"x":10575,"z":-94},"9":{"x":10569,"z":-136},"10":{"x":10617,"z":-161}},"color":"#808080"},"f59op99wnp6":{"id":"f59op99wnp6","coords":{"0":{"x":10696,"z":-869},"1":{"x":10690,"z":-815},"2":{"x":10654,"z":-803},"3":{"x":10660,"z":-760},"4":{"x":10636,"z":-742},"5":{"x":10605,"z":-760},"6":{"x":10611,"z":-778},"7":{"x":10587,"z":-821},"8":{"x":10605,"z":-875},"9":{"x":10605,"z":-900},"10":{"x":10666,"z":-906}},"color":"#808080"},"1rapakgzha1":{"id":"1rapakgzha1","coords":{"0":{"x":10896,"z":-1027},"1":{"x":10987,"z":-906},"2":{"x":10944,"z":-833},"3":{"x":11035,"z":-784},"4":{"x":10926,"z":-688},"5":{"x":10944,"z":-645},"6":{"x":10853,"z":-542},"7":{"x":10769,"z":-542},"8":{"x":10781,"z":-712},"9":{"x":10805,"z":-748},"10":{"x":10757,"z":-863},"11":{"x":10775,"z":-894},"12":{"x":10811,"z":-1021},"13":{"x":10872,"z":-1039}},"color":"#808080"},"yy4mrxbehv":{"id":"yy4mrxbehv","coords":{"0":{"x":10944,"z":76},"1":{"x":10993,"z":142},"2":{"x":10993,"z":167},"3":{"x":10908,"z":173},"4":{"x":10920,"z":148},"5":{"x":10890,"z":124},"6":{"x":10908,"z":76}},"color":"#808080"},"0f14qdf3ejoi":{"id":"0f14qdf3ejoi","coords":{"0":{"x":11083,"z":-215},"1":{"x":11096,"z":-100},"2":{"x":11174,"z":-33},"3":{"x":11126,"z":9},"4":{"x":11071,"z":39},"5":{"x":11029,"z":-3},"6":{"x":10975,"z":-15},"7":{"x":10920,"z":-70},"8":{"x":10926,"z":-136},"9":{"x":10999,"z":-185}},"color":"#808080"},"daelzmxjab5":{"id":"daelzmxjab5","coords":{"0":{"x":11186,"z":-354},"1":{"x":11247,"z":-318},"2":{"x":11319,"z":-348},"3":{"x":11428,"z":-203},"4":{"x":11477,"z":-161},"5":{"x":11459,"z":-39},"6":{"x":11447,"z":15},"7":{"x":11465,"z":100},"8":{"x":11416,"z":76},"9":{"x":11374,"z":76},"10":{"x":11301,"z":45},"11":{"x":11283,"z":-27},"12":{"x":11344,"z":-100},"13":{"x":11374,"z":-136},"14":{"x":11416,"z":-142},"15":{"x":11368,"z":-142},"16":{"x":11356,"z":-185},"17":{"x":11265,"z":-197},"18":{"x":11247,"z":-264},"19":{"x":11217,"z":-312},"20":{"x":11174,"z":-318},"21":{"x":11144,"z":-330},"22":{"x":11168,"z":-360}},"color":"#808080"},"3cxqz2kcgcm":{"id":"3cxqz2kcgcm","coords":{"0":{"x":9552,"z":-1360},"1":{"x":9589,"z":-1336},"2":{"x":9631,"z":-1348},"3":{"x":9631,"z":-1311},"4":{"x":9559,"z":-1299},"5":{"x":9528,"z":-1263},"6":{"x":9552,"z":-1233},"7":{"x":9522,"z":-1178},"8":{"x":9492,"z":-1202},"9":{"x":9480,"z":-1184},"10":{"x":9462,"z":-1227},"11":{"x":9522,"z":-1269},"12":{"x":9510,"z":-1311}},"color":"#808080"},"o2u7hg7zslr":{"id":"o2u7hg7zslr","coords":{"0":{"x":10012,"z":-1311},"1":{"x":10085,"z":-1342},"2":{"x":10152,"z":-1324},"3":{"x":10049,"z":-1281}},"color":"#808080"},"xgihuxzkkyd":{"id":"xgihuxzkkyd","coords":{"0":{"x":9226,"z":-118},"1":{"x":9250,"z":-142},"2":{"x":9286,"z":-112},"3":{"x":9244,"z":-39},"4":{"x":9244,"z":-76}},"color":"#808080"}}
    // console.log("--document.read--");
    const markStorage = "markList",
        polyStorage = "polyList",
        svgStorage = "svgInfo",
        markTypes = {
            village: { label: "Village", color: "brown" },
            ancientCity: { label: "Ancient City", color: "aqua" },
            pillagerOutpost: { label: "Pillager Outpost", color: "maroon" },
            portal: { label: "Portal", color: "RebeccaPurple" },
            smallRuin: { label: "Small Ruin", color: "SkyBlue" },
            largeRuin: { label: "Large Ruin", color: "yellow" },
            shipwreck: { label: "Shipwreck", color: "chocolate" },
        };
    var status = { isDrawing: false, isEditingMark: false, isEditingPoly: false, editingId: 0, showMarks: true, showPolys: true },
        svgWindow = {
            width: 100,
            height: 100,
            left: 0,
            top: 0,
        },
        svgInfo = {
            minX: 0,
            maxX: svgWindow.width,
            minZ: 0,
            maxZ: svgWindow.height,
        },
        addingPoly = {},
        mousePosX,
        mousePosY,
        mouseCoordX,
        mouseCoordZ,
        isInit = false;
    const marksTableEle = $("#marksTable"),
        svgWrapperEle = $("#svgWrapper"),
        svgEle = $("#svg"),
        svgBackgroundEle = $("#svgBackground"),
        statusEle = $("#status"),
        startPolygonEle = $("#startPolygon"),
        saveCancelEle = $("#saveCancel"),
        savePolygonEle = $("#savePolygon"),
        polyColorEle = $("#polyColor"),
        cancelPolygonEle = $("#cancelPolygon"),
        polygonCoordsEle = $("#polygonCoords"),
        polyTableEle = $("#polyTable");

    // ////////
    // init
    function init() {
        isInit = true;

        // mark options
        Object.entries(markTypes).forEach(function ([val, { label }]) {
            $("#markType").append($("<option></option>").val(val).text(label));
        });

        // minMax inputs
        const loc = _getStorage(svgStorage);
        const minMaxDisplay = Object.entries(svgInfo).reduce(function (d, [k, v]) {
            if (!loc[k]) updateMinMax(k, v);
            d[k] = Number(loc[k]) ?? v;
            return d;
        }, {});
        svgInfo = minMaxDisplay;
        displayMinMax(minMaxDisplay);

        // get svg size and display marks
        getWindowSize();

        // status
        // console.log("status.showMarks: ", status.showMarks, " $(#showMarks): ", $("#showMarks"));
        $("#showMarks").prop("checked", status.showMarks);
        $("#showPolys").prop("checked", status.showPolys);

        isInit = false;
    }
    init();

    // ///////////
    // helpers

    // storage
    function _setStorage(storageName, value) {
        localStorage.removeItem(storageName);
        localStorage.setItem(storageName, JSON.stringify(value));
    }
    function _getStorage(storageName) {
        return JSON.parse(localStorage.getItem(storageName) ?? "{}");
    }

    // ///////////
    // crud

    // general
    function _genericDelete(storageName, id) {
        const oldList = _getStorage(storageName);
        const newList = Object.entries(oldList).reduce(function (s, [k, v]) {
            if (k !== id) s[k] = v;
            return s;
        }, {});
        _setStorage(storageName, newList);
        return newList;
    }
    function createID() {
        // console.log("--createID--");
        return Math.random()
            .toString(36)
            .substring(2, 12 + 2);
    }
    // min max
    function updateMinMax(name, value) {
        // console.log("--updateMinMax--");
        const oldList = _getStorage(svgStorage);
        const newList = { ...oldList, [name]: value };
        svgInfo[name] = value;
        // console.log(name, ": ", value);
        _setStorage(svgStorage, newList);
    }
    // mark
    function createMark(value) {
        // console.log("--createMark--");
        const type = $("#markType").val(),
            id = createID(),
            oldList = _getStorage(markStorage);

        // validate
        if (value && type && id) {
            const valueSplit = value.split(" ");
            // console.log("valueSplit: ", valueSplit);

            // TODO: check if mark already exists in list before adding to the list

            const newMark = {
                id,
                type,
                x: valueSplit[1],
                z: valueSplit[3],
            };
            const newList = {
                ...oldList,
                [id]: newMark,
            };
            // console.log("newMark: ", newMark);

            // save
            _setStorage(markStorage, newList);

            // re-render mark list only
            displayMarks(newList);

            // reset
            $("#newValue").val("");
        }
    }
    // marks
    function deleteMark(id) {
        console.log("deleteMark id: ", id);
        const newList = _genericDelete(markStorage, id);
        reRender({ marks: newList });
    }
    // adding poly
    function updateAddingPoly() {
        addingPoly[Object.keys(addingPoly).length] = { x: mouseCoordX, z: mouseCoordZ };
        polygonCoordsEle.html(polygonCoordsEle.html() + `${mouseCoordX} ${mouseCoordZ}<br/>`);

        reRender({ adding: addingPoly });
    }
    function resetAddingPoly() {
        addingPoly = {};
        polygonCoordsEle.html("");
    }
    function createPoly() {
        const oldList = _getStorage(polyStorage),
            id = createID(),
            color = polyColorEle.val();

        // validate
        if (addingPoly && id) {
            const newPoly = {
                id,
                coords: addingPoly,
                color,
            };
            const newList = {
                ...oldList,
                [id]: newPoly,
            };
            // add to list
            _setStorage(polyStorage, newList);
            // reset adding
            resetAddingPoly();
            // re-render
            displayPoly(newList);
            // re-start drawing
            displayDrawingPoly(false);
        }
    }
    // polys
    function deletePoly(id) {
        // console.log("deletePoly id: ", id);
        const newList = _genericDelete(polyStorage, id);
        reRender({ poly: newList });
    }
    function editPoly() {
        const oldList = _getStorage(polyStorage),
            id = status.editingId;
        color = $("#editPolyColor").val();
        console.log("editPoly id: ", id, " color: ", color);
        // validate
        if (id && color && oldList[id]) {
            const newPoly = {
                ...oldList[id],
                color,
            };
            const newList = {
                ...oldList,
                [id]: newPoly,
            };

            // add to list
            _setStorage(polyStorage, newList);
            // render
            reRender({ poly: newList });
        }
    }

    // status
    function updateStatus(name, value) {
        status[name] = value;
        statusEle.html(name);
        statusEle.show();
    }
    function updateStatusEditPoly(id) {
        status.isEditingPoly = true;
        status.editingId = id;
        reRender();
    }
    function updateStatusSavePoly(id) {
        editPoly();

        status.isEditingPoly = false;
        status.editingId = "";
        reRender();
    }
    function updateStatusCancelPoly() {
        updateStatusSavePoly();
    }

    // //////////
    // Render

    // display
    function displayMarks(marks = null) {
        // console.log("--displayMarks--");
        if (!marks) marks = _getStorage(markStorage);

        // clear
        marksTableEle.html("");
        svgEle.html("");

        Object.entries(marks).forEach(function ([key, mark]) {
            // console.log("mark: ", mark);
            const { id, type, x, z } = mark;

            // mark table
            marksTableEle.append(
                $(`<div>`, {
                    id,
                    class: "mb-1",
                })
                    .append($("<div>", { style: `background:${markTypes[type].color};` }))
                    .append($("<div>").text(markTypes[type].label))
                    .append($("<div>").text(x))
                    .append($("<div>").text(z))
                    .append(
                        $("<div>")
                            .append($(`<i>`, { class: "fa fa-trash deleteMark", "data-markid": id, "aria-hidden": "true" }))
                            .append($(`<i>`, { class: "fa fa-pencil editMark", "data-markid": id, "aria-hidden": "true" }))
                    )
            );

            // svg
            if (status.showMarks) svgEle.html(svgEle.html() + _genRect(10, 10, x, z, markTypes[type].color));
        });
    }
    function displayMinMax(minMaxDisplay) {
        // console.log("--displayMinMax--");
        if (!minMaxDisplay) minMaxDisplay = svgInfo;
        Object.entries(minMaxDisplay).forEach(function ([k, v]) {
            $("#" + k).val(v);
        });
    }
    function displayPoly(poly = null) {
        if (!poly) poly = _getStorage(polyStorage);

        // if addingPoly
        if (poly[0]) {
            // show svg poly
            svgEle.html(svgEle.html() + _genPoly(poly, polyColorEle.val()));
        }
        // else polyStorage
        else {
            polyTableEle.html("");
            Object.entries(poly).forEach(function ([id, { coords, color }]) {
                const delBtn = $(`<i>`, { class: "fa fa-trash deletePoly", "data-polyid": id, "aria-hidden": "true" });

                // poly table
                polyTableEle.append(
                    $(`<div>`, {
                        id,
                        class: "mb-2",
                    })
                        .append($("<div>", { style: `background:${color};` }))
                        .append(
                            Object.entries(coords).reduce(function (c, [k, { x, z }], i) {
                                c.append($("<div>").text(x)).append($("<div>").text(z));
                                return c;
                            }, $("<div>"))
                        )
                        .append(
                            status.isEditingPoly && id === status.editingId
                                ? $("<div>")
                                        .append($("<input>", { type: "color", value: color, id: "editPolyColor", "aria-hidden": "true" }))
                                        .append($(`<i>`, { class: "fa fa-save savePoly", "data-polyid": id, "aria-hidden": "true" }))
                                        .append($(`<i>`, { class: "fa fa-times cancelPoly", "data-polyid": id, "aria-hidden": "true" }))
                                        .append(delBtn)
                                : $("<div>")
                                        .append(delBtn)
                                        .append($(`<i>`, { class: "fa fa-pencil editPoly", "data-polyid": id, "aria-hidden": "true" }))
                        )
                );

                // svg poly
                if (status.showPolys) svgEle.html(svgEle.html() + _genPoly(coords, color));
            });
        }
    }
    function getWindowSize() {
        // console.log("--getWindowSize--");


        const eleW = Math.floor(svgWrapperEle.width()),
            eleH = Math.floor(svgWrapperEle.height()),
            calcW = Math.floor(eleH * (974 / 842)),
            calcH = Math.floor(eleW * (842 / 974));
        let newW = eleW,
            newH = calcH;
        if (calcW < eleW || eleH < calcH) {
            newW = calcW;
            newH = eleH;
        }

        svgWindow = {
            width: newW,
            height: newH,
            top: svgWrapperEle.position().top,
            left: svgWrapperEle.position().left,
        };
        // console.log("svgWindow: ", svgWindow, " eleW: ", eleW, " eleH: ", eleH, " calcW: ", calcW, " calcH: ", calcH);

        // change size
        svgEle.width(svgWindow.width);
        svgEle.height(svgWindow.height);
        svgBackgroundEle.width(svgWindow.width);
        svgBackgroundEle.height(svgWindow.height);

        // re-render
        reRender();
    }
    function reRender(renderData = null) {
        console.log("reRender renderData: ", renderData);
        const { marks, poly, adding } = renderData ?? {};
        displayMarks(marks ?? null);
        displayPoly(poly ?? null);
        if (status.isDrawing) displayPoly(adding ?? addingPoly);
    }

    function displayDrawingPoly(isOn) {
        if (isOn) {
            updateStatus("isDrawing", true);
            saveCancelEle.show();
            startPolygonEle.hide();
        } else {
            updateStatus("isDrawing", false);
            saveCancelEle.hide();
            startPolygonEle.show();
        }
        reRender();
    }

    // svg helpers
    function _genRect(width, height, x, z, fill) {
        x = _translateX(x) - width / 2;
        z = _translateZ(z) - height / 2;
        return `<rect width="${width}" height="${height}" x="${x}" y="${z}" fill="${fill}" />`;
    }
    function _genPoly(polyCoords, color = "white") {
        let coords = Object.entries(polyCoords).reduce(function (s, [k, { x, z }], i) {
            x = _translateX(x);
            z = _translateZ(z);
            return s + `${x},${z} `;
        }, "");
        // console.log("coords: ", coords);
        return `<polygon points="${coords}" fill="${color}" />`;
    }
    function _translateX(x) {
        return Math.round(Math.abs((x - svgInfo.minX) / (svgInfo.maxX - svgInfo.minX)) * svgWindow.width);
    }
    function _translateZ(z) {
        return Math.round(Math.abs((z - svgInfo.minZ) / (svgInfo.maxZ - svgInfo.minZ)) * svgWindow.height);
    }

    // ///////////
    // on handlers

    // min max
    $(".minMax").on("change click keyup input paste", function (e) {
        // console.log("--.minMax on change--");
        updateMinMax(e.target.name, e.target.value);
    });

    // add mark
    $("#newValue").on("keypress", function (e) {
        // console.log("--#newValue on keypress--");
        const v = e.target.value;
        // if enter key
        if (e.which == 13 && v) {
            createMark(v);
        }
    });
    $("#submit").on("click", function (e) {
        // console.log("--#submit on click--");
        const v = $("#newValue").val();
        if (v) createMark(v);
    });
    // edit mark
    $(document).on("click", ".deleteMark", function () {
        deleteMark($(this).data("markid"));
    });
    // show marks
    $("#showMarks").click(function () {
        status.showMarks = !status.showMarks;
        $(this).prop("checked", status.showMarks);
        reRender();
    });

    // window resize
    $(window).on("resize", function () {
        getWindowSize();
    });
    // refresh
    $("#reset").on("click", function () {
        reRender();
    });

    // svg mousemove
    svgEle.on("mousemove", function (event) {
        mousePosX = Math.floor(event.pageX - svgWindow.left);
        mousePosY = Math.floor(event.pageY - svgWindow.top);
        $("#mousePosX").text(mousePosX);
        $("#mousePosY").text(mousePosY);

        mouseCoordX = Math.floor((mousePosX / svgWindow.width) * Math.abs(svgInfo.maxX - svgInfo.minX) + svgInfo.minX);
        mouseCoordZ = Math.floor((mousePosY / svgWindow.height) * Math.abs(svgInfo.maxZ - svgInfo.minZ) + svgInfo.minZ);
        $("#mouseCoordX").text(mouseCoordX);
        $("#mouseCoordZ").text(mouseCoordZ);
    });

    // add polygon
    startPolygonEle.on("click", function () {
        displayDrawingPoly(true);
    });
    svgEle.on("click", function () {
        if (status.isDrawing) {
            updateAddingPoly();
        }
    });
    savePolygonEle.on("click", function () {
        createPoly();
    });
    cancelPolygonEle.on("click", function () {
        displayDrawingPoly(false);
    });
    polyColorEle.on("change", function () {
        console.log("polyColorEle on");
        displayPoly(addingPoly);
    });
    $(document).on("click", ".deletePoly", function () {
        if (window.confirm("Confirm Delete?")) deletePoly($(this).data("polyid"));
    });
    // edit polygon
    $(document).on("click", ".editPoly", function () {
        updateStatusEditPoly($(this).data("polyid"));
    });
    $(document).on("change", "#editPolyColor", function () {
        editPoly();
    });
    $(document).on("click", ".savePoly", function () {
        updateStatusSavePoly($(this).data("polyid"));
    });
    $(document).on("click", ".cancelPoly", function () {
        updateStatusCancelPoly();
    });
    // show poly
    $("#showPolys").click(function () {
        status.showPolys = !status.showPolys;
        $(this).prop("checked", status.showPolys);
        reRender();
    });
});