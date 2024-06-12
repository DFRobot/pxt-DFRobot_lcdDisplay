
const enum LCDWidgetCategoryOne {
    //% block="1-Slider"
    Slider = 1,
    //% block="2-Bar"
    Bar = 2,
    //% block="3-Compass"
    Compass = 3,
    //% block="4-Gauge"
    Gauge = 4,
    //% block="5-LineMeter"
    LineMeter = 5,
}

const enum LCDWidgetCategoryTwo {
    //% block="1-Slider"
    Slider = 1,
    //% block="2-Bar"
    Bar = 2,
    //% block="3-Compass"
    Compass = 3,
    //% block="4-Gauge"
    Gauge = 4,
    //% block="5-LineMeter"
    LineMeter = 5,
    //% block="6-Text"
    Text = 6,
    //% block="7-Line"
    Line = 7,
    //% block="8-Rectangle"
    Rectangle = 8,
    //% block="9-Circle"
    Circle = 9,
    //% block="10-Triangle"
    Triangle = 10,
    //% block="11-Icon"
    Icon = 11,
    //% block="12-Picture"
    Picture = 12,
}

//% block="lcdDisplay"
//% weight=100 color=#0fbc11 icon="\uf0b2"
namespace lcdDisplay {

    export enum FontSize {
        //% block="Large"
        Large = 1,
        //% block="Small"
        Small = 2,
    }

    export enum RectangleRound {
        //% block="have round"
        IsRound = 1,
        //% block="None"
        NoneRound = 2,
    }

    export enum ChartStyles {
        //% block="LineChart"
        LineChart = 1,
        //% block="BarChart"
        BarChart = 2,
        //% block="ShadingLineChart"
        ShadingLineChart = 3,
    }

    export enum Protocol {
        IIC = 1,
        Serial = 2,
    }


    const IIC_MAX_TRANSFER_SIZE = 32;

    // cmd len
    const CMDLEN_OF_HEAD_LEN = 3;
    const CMD_DELETE_OBJ_LEN = 0x06;
    const CMD_SET_TOP_OBJ_LEN = 0x06;
    const CMD_SET_COMPASS_VALUE_LEN = 0x07;
    const CMD_SET_LEN = 0x07;
    const CMD_SET_GAUGE_VALUE_LEN = 0x07;
    const CMD_SET_LINE_METER_VALUE_LEN = 0x07;
    const CMD_SET_BAR_VALUE_LEN = 0x07;
    const CMD_SET_SLIDER_VALUE_LEN = 0x07;
    const CMD_SET_ANGLE_OBJ_LEN = 0x08;
    const CMD_DRAW_COMPASS_LEN = 0x0B;
    const CMD_DRAW_CHART_LEN = 0x09;
    const CMD_DRAW_SERIE_LEN = 0x09;
    const CMD_OF_DRAW_ICON_INTERNAL_LEN = 0x0D;
    const CMD_OF_DRAW_GIF_INTERNAL_LEN = 0x0D;
    const CMD_OF_DRAW_BAR_LEN = 0x10;
    const CMD_OF_DRAW_SLIDER_LEN = 0x10;
    const CMD_DRAW_PIXEL_LEN = 0x11;
    const CMD_DRAW_LINE_LEN = 0x11;
    const CMD_OF_DRAW_CIRCLE_LEN = 0x13;
    const CMD_OF_DRAW_GAUGE_LEN = 0x15;
    const CMD_OF_DRAW_LINE_METER_LEN = 0x15;
    const CMD_OF_DRAW_RECT_LEN = 0x16;
    const CMD_OF_DRAW_TRIANGLE_LEN = 0x19;

    // cmd
    const CMD_SET_BACKGROUND_COLOR = 0x19;
    const CMD_SET_BACKGROUND_IMG = 0x1A;
    const CMD_OF_DRAW_PIXEL = 0x02;
    const CMD_OF_DRAW_LINE = 0x03;
    const CMD_OF_DRAW_RECT = 0x04;
    const CMD_OF_DRAW_CIRCLE = 0x06;
    const CMD_OF_DRAW_TRIANGLE = 0x07;
    const CMD_OF_DRAW_ICON_INTERNAL = 0x08;
    const CMD_OF_DRAW_ICON_EXTERNAL = 0x09;
    const CMD_OF_DRAW_BAR = 0x0A;
    const CMD_OF_DRAW_BAR_VALUE = 0x0B;
    const CMD_OF_DRAW_SLIDER = 0x0C;
    const CMD_OF_DRAW_SLIDER_VALUE = 0x0D;
    const CMD_OF_DRAW_LINE_METER = 0x10;
    const CMD_OF_DRAW_LINE_METER_VALUE = 0x11;
    const CMD_OF_DRAW_COMPASS = 0x0E;
    const CMD_OF_DRAW_COMPASS_VALUE = 0x0F;
    const CMD_OF_DRAW_GAUGE = 0x12;
    const CMD_OF_DRAW_GAUGE_VALUE = 0x13;
    const CMD_OF_DRAW_LINE_CHART = 0x14;
    const CMD_OF_DRAW_LINE_CHART_TEXT = 0x15;
    const CMD_OF_DRAW_SERIE = 0x16;
    const CMD_OF_DRAW_SERIE_DATA = 0x17;
    const CMD_OF_DRAW_TEXT = 0x18;
    const CMD_DELETE_OBJ = 0x1B;
    const CMD_SET_TOP_OBJ = 0x1C;
    const CMD_SET_ANGLE_OBJ = 0x1E;
    const CMD_OF_DRAW_GIF_INTERNAL = 0x1F;
    const CMD_OF_DRAW_GIF_EXTERNAL = 0x20;

    const CMD_HEADER_HIGH = 0x55;
    const CMD_HEADER_LOW = 0xaa;

    let address = 0x2c;
    class GenericNode {
        id: number
        next: GenericNode
        constructor(id: number) {
            this.id= id;
            this.next = null;
        }
    }
    
    class LinkedList {
        head: GenericNode
        size: number
        id: number
        constructor() {
          this.head = null;
          this.size = 0;
          this.id = 1;
        }

        // adds a node to the end of the linked list
        append() {
            const newNode = new GenericNode(this.id);
            if(this.head == null) {
                this.head = newNode;
            } else {
                let current = this.head;
                while(current.next != null) {
                    current = current.next;
                }
                current.next = newNode;
            }
            this.size++;
            this.id++;
        }
        // insert a node at a specific location
        insert(index: number, id: number): boolean {
            if(index < 0 || index > this.size) {
                return false;
            }
            const newNode = new GenericNode(id);
            if(index == 0) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                let current = this.head;
                let previous = null;
                let i = 0;
                while(i < index) {
                    previous = current;
                    current = current.next;
                    i++;
                }
                newNode.next = current;
                previous.next = newNode;
            }
            this.size++;
            return true;    
        }
        // removes a node at a specific location
        removeAt(index: number): boolean {
            if(index < 0 || index >= this.size || this.head == null) {
                return false;
            }
            let current = this.head;
            if(index == 0) {
                this.head = current.next;
            } else {
                let previous = null;
                let i = 0;
                while(i < index) {
                    previous = current;
                    current = current.next;
                    i++;
                }
                previous.next = current.next;
            }
            this.size--;
            return true;
        }

        // example Remove a node with a specific id
        removeId(id: number): boolean {
            if(this.head == null) {
                return false;
            }
            let current = this.head;
            if(current.id == id) {
                this.head = current.next;
            } else {
                let previous = null;
                while(current.id != id) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.size--;
            return true;
        }
    }

    type GenericList = {
        lineChartHead: LinkedList | null,
        seriesHead: LinkedList | null,
        compassHead: LinkedList | null,
        textHead: LinkedList | null,
        gaugeHead: LinkedList | null,
        lineHead: LinkedList | null,
        rectHead: LinkedList | null,
        circleHead: LinkedList | null,
        triangleHead: LinkedList | null,
        lineMeterHead: LinkedList | null,
        barHead: LinkedList | null,
        sliderHead: LinkedList | null,
        iconHead: LinkedList | null,
        gifHead: LinkedList | null,
    }

    let list: GenericList;
    let protocol: Protocol = Protocol.IIC;
    
    /**
     * ...
     */

    //% block="Color serial screen I2C initialization" 
    //% weight=100
    export function lcdInitIIC() {
        creatList();
        protocol = Protocol.IIC;
    }

    /**
     * ...
     */

    //% block="clear the screen" 
    //% weight=95
    export function lcdClearAll() {
        cleanScreen();
    }

    /**
     * ...
     * @param color to color ,eg: 0xFF0000
     */

    //% block="set the background color %color"
    //% color.shadow="colorNumberPicker" 
    //% weight=90
    export function lcdSetBgcolor(color: number) {
        setBackgroundColor(color);
    }

    /**
     * Convert red, green and blue channels into a RGB color
     * @param red to red ,eg: 255
     * @param green to green ,eg: 255
     * @param blue to blue ,eg: 255
     */

    //% block="red %red green %green blue %blue"
    //% red.min=0 red.max=255 red.defl=255
    //% green.min=0 green.max=255 green.defl=255
    //% blue.min=0 blue.max=255 blue.defl=255
    //% weight=85
    export function lcdGetRgbColor(red: number, green: number, blue: number): number {
        return (red << 16) + (green << 8) + (blue);
    }

    /**
     * ...
     * @param picture to picture ,eg: "wind.png"
     */

    //% block="Setting a background picture %picture"
    //% weight=80
    export function lcdSetBgIamge(picture: string) {
        // setBackgroundImg(0, picture); // Internal storage of pictures
        setBackgroundImg(1, picture); // Usb flash drive to store pictures
    }

    /**
     * ...
     * @param text to text ,eg: "hello"
     * @param num to num ,eg: 1
     * @param x to x ,eg: 120
     * @param y to y ,eg: 120
     * @param size to size ,eg: FontSize.Large
     * @param color to color ,eg: 0xFF0000
     */

    //% block="display text %text number %num position x: %x y: %y || size %size color %color"
    //% x.min=0 x.max=320 x.defl=120
    //% y.min=0 y.max=240 y.defl=120
    //% color.shadow="colorNumberPicker"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=75
    export function lcdDisplayText(text: string, num: number, x: number, y: number, size?: FontSize, color?: number) {
        updateString(num, x, y, text, size, color);
    }


    /**
     * ...
     * @param num to num ,eg: 1
     * @param hour to hour ,eg: 12
     * @param min to min ,eg: 40
     * @param sec to sec ,eg: 30
     * @param x to x ,eg: 120
     * @param y to y ,eg: 120
     * @param size to size ,eg: FontSize.Large
     * @param color to color ,eg: 0xFF0000
     */

    //% block="display time number %num hour %hour minutes %min second %sec position x: %x y: %y || size %size color %color"
    //% hour.min=0 hour.max=23 hour.defl=12
    //% min.min=0 min.max=59 min.defl=40
    //% sec.min=0 sec.max=59 sec.defl=30
    //% x.min=0 x.max=320 x.defl=120
    //% y.min=0 y.max=240 y.defl=120
    //% color.shadow="colorNumberPicker"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=70
    export function lcdDisplayTime(num: number, hour: number, min: number, sec: number, x: number, y: number, size?: FontSize, color?: number) {
        updateLcdTime(num, x, y, hour, min, sec, size, color);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param name to name ,eg: "wind.png"
     * @param x to x ,eg: 120
     * @param y to y ,eg: 120
     * @param size to size ,eg: FontSize.Large
     */

    //% block="display iamge number %num name %name position x: %x y: %y || size %size"
    //% x.min=0 x.max=320 x.defl=120
    //% y.min=0 y.max=240 y.defl=120
    //% size.min=0 size.max=512 size.defl=256
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=65
    export function lcdDisplayIamge(num: number, name: string, x: number, y: number, size?: number) {
        updateIcon(num, x, y, name, size);
    }


    /**
     * ...
     * @param num to num ,eg: 1
     * @param angle to angle ,eg: 180
     */

    //% block="rotate iamge number %num angle %angle"
    //% angle.min=0 angle.max=360 size.defl=180
    //% weight=60
    export function lcdRotateIamge(num: number, angle: number) {
        setAngleIcon(num, angle);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param x1 to x1 ,eg: 120
     * @param y1 to y1 ,eg: 120
     * @param x2 to x2 ,eg: 240
     * @param y2 to y2 ,eg: 240
     * @param width to width ,eg: 5
     * @param color to color ,eg: 0xFF0000
     */

    //% block="draw line number %num start x1: %x1 y1: %y1 end x2: %x2 y2: %y2 || width %width color %color"
    //% x1.min=0 x1.max=320 x1.defl=120
    //% y1.min=0 y1.max=240 y1.defl=120
    //% x2.min=0 x2.max=320 x2.defl=240
    //% y2.min=0 y2.max=240 y2.defl=240
    //% color.shadow="colorNumberPicker"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=55
    export function lcdDrawLine(num: number, x1: number, y1: number, x2: number, y2: number, width?: number, color?: number) {
        updateLine(num, x1, y1, x2, y2, width, color);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param x to x ,eg: 120
     * @param y to y ,eg: 120
     * @param w to w ,eg: 240
     * @param h to h ,eg: 240
     * @param width to width ,eg: 5
     * @param bocolor to bocolor ,eg: 0xFF0000
     * @param fcolor to fcolor ,eg: 0xFF0000
     * @param round to round ,eg: RectangleRound.IsRound
     */

    //% block="draw rectangle number %num start x: %x y: %y width %w height %h || line width %width Border color %bocolor fill color %fcolor round %round"
    //% x.min=0 x.max=320 x.defl=120
    //% y.min=0 y.max=240 y.defl=120
    //% w.min=0 w.max=320 w.defl=80
    //% h.min=0 h.max=240 h.defl=100
    //% bocolor.shadow="colorNumberPicker"
    //% fcolor.shadow="colorNumberPicker"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=50
    export function lcdDrawRectangle(num: number, x: number, y: number, w: number, h: number, width?: number, bocolor?: number, fcolor?: number, round?: RectangleRound) {
        let fill = true;
        updateRect(num, x, y, w, h, width, bocolor, fill ? 1 : 0, fcolor, round);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param x to x ,eg: 120
     * @param y to y ,eg: 120
     * @param r to r ,eg: 10
     * @param width to width ,eg: 5
     * @param bocolor to bocolor ,eg: 0xFF0000
     * @param fcolor to fcolor ,eg: 0xFF0000
     */

    //% block="draw Circle number %num center x: %x y: %y radius %r || line width %width Border color %bocolor fill color %fcolor"
    //% x.min=0 x.max=320 x.defl=120
    //% y.min=0 y.max=240 y.defl=120
    //% r.min=0 r.max=320 r.defl=10
    //% bocolor.shadow="colorNumberPicker"
    //% fcolor.shadow="colorNumberPicker"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=45
    export function lcdDrawCircle(num: number, x: number, y: number, r: number, width?: number, bocolor?: number, fcolor?: number) {
        let fill = true;
        updateCircle(num, x, y, r, width, bocolor, fill ? 1 : 0, fcolor);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param x1 to x1 ,eg: 10
     * @param y1 to y1 ,eg: 10
     * @param x2 to x2 ,eg: 120
     * @param y2 to y2 ,eg: 120
     * @param x3 to x3 ,eg: 200
     * @param y3 to y3 ,eg: 200
     * @param width to width ,eg: 5
     * @param bocolor to bocolor ,eg: 0xFF0000
     * @param fcolor to fcolor ,eg: 0xFF0000
     */

    //% block="draw triangle number %num x1: %x1 y1: %y1 x2: %x2 y2: %y2 x3: %x3 y3: %y3 || line width %width Border color %bocolor fill color %fcolor"
    //% x1.min=0 x1.max=320 x1.defl=10
    //% y1.min=0 y1.max=240 y1.defl=10
    //% x2.min=0 x2.max=320 x2.defl=120
    //% y2.min=0 y2.max=240 y2.defl=120
    //% x3.min=0 x3.max=320 x3.defl=200
    //% y3.min=0 y3.max=240 y3.defl=200
    //% bocolor.shadow="colorNumberPicker"
    //% fcolor.shadow="colorNumberPicker"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=40
    export function lcdDrawTriangle(num: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, width?: number, bocolor?: number, fcolor?: number) {
        let fill = true;
        updateTriangle(num, x1, y1, x2, y2, x3, y3, width, bocolor, fill ? 1 : 0, fcolor);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param x to x ,eg: 120
     * @param y to y ,eg: 120
     * @param w to w ,eg: 120
     * @param h to h ,eg: 120
     * @param color to color ,eg: 0xFF0000
     */

    //% block="draw slider number %num position x: %x y: %y width %w height %h || color %color"
    //% x.min=0 x.max=320 x.defl=120
    //% y.min=0 y.max=240 y.defl=120
    //% w.min=0 w.max=320 w.defl=120
    //% h.min=0 h.max=240 h.defl=120
    //% color.shadow="colorNumberPicker"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=35
    export function lcdDrawSlider(num: number, x: number, y: number, w: number, h: number, color?: number) {
        updateSlider(num, x, y, w, h, color);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param x to x ,eg: 120
     * @param y to y ,eg: 120
     * @param w to w ,eg: 120
     * @param h to h ,eg: 120
     * @param color to color ,eg: 0xFF0000
     */

    //% block="draw bar number %num position x: %x y: %y width %w height %h || color %color"
    //% x.min=0 x.max=320 x.defl=120
    //% y.min=0 y.max=240 y.defl=120
    //% w.min=0 w.max=320 w.defl=120
    //% h.min=0 h.max=240 h.defl=120
    //% color.shadow="colorNumberPicker"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=30
    export function lcdDrawBar(num: number, x: number, y: number, w: number, h: number, color?: number) {
        updateBar(num, x, y, w, h, color);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param x to x ,eg: 120
     * @param y to y ,eg: 120
     * @param r to r ,eg: 120
     */

    //% block="draw compass number %num position x: %x y: %y radius %r"
    //% x.min=0 x.max=320 x.defl=120
    //% y.min=0 y.max=240 y.defl=120
    //% r.min=0 r.max=320 r.defl=120
    //% inlineInputMode=inline
    //% weight=25
    export function lcdDrawCompass(num: number, x: number, y: number, r: number) {
        updateCompass(num, x, y, r);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param x to x ,eg: 120
     * @param y to y ,eg: 120
     * @param r to r ,eg: 120
     * @param start to start ,eg: 120
     * @param end to end ,eg: 240
     * @param color to color ,eg: 0xFF0000
     * @param dcolor to dcolor ,eg: 0xFF0000
     */

    //% block="draw gauge number %num position x: %x y: %y radius %r start of scale %start End of scale %end || Pointer color %color Dial color %dcolor"
    //% x.min=0 x.max=320 x.defl=120
    //% y.min=0 y.max=240 y.defl=120
    //% r.min=0 r.max=320 r.defl=120
    //% start.min=0 start.max=360 start.defl=120
    //% end.min=0 end.max=360 end.defl=240
    //% color.shadow="colorNumberPicker"
    //% dcolor.shadow="colorNumberPicker"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=20
    export function lcdDrawGauge(num: number, x: number, y: number, r: number, start: number, end: number, color?: number, dcolor?: number) {
        updateGauge(num, x, y, r, start, end, color, dcolor);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param x to x ,eg: 120
     * @param y to y ,eg: 120
     * @param r to r ,eg: 120
     * @param start to start ,eg: 120
     * @param end to end ,eg: 240
     * @param color to color ,eg: 0xFF0000
     * @param dcolor to dcolor ,eg: 0xFF0000
     */

    //% block="draw lineMeter number %num position x: %x y: %y radius %r start of scale %start End of scale %end || Pointer color %color Dial color %dcolor"
    //% x.min=0 x.max=320 x.defl=120
    //% y.min=0 y.max=240 y.defl=120
    //% r.min=0 r.max=320 r.defl=120
    //% start.min=0 start.max=360 start.defl=120
    //% end.min=0 end.max=360 end.defl=240
    //% color.shadow="colorNumberPicker"
    //% dcolor.shadow="colorNumberPicker"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% weight=18
    export function lcdDrawLineMeter(num: number, x: number, y: number, r: number, start: number, end: number, color?: number, dcolor?: number) {
        updateLineMeter(num, x, y, r, start, end, color, dcolor);
    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param xaxis to xaxis ,eg: "Jan Feb Mar Apr May Jun"
     * @param yaxis to yaxis ,eg: "20 40 60 80 100"
     * @param styles to styles ,eg: ChartStyles.LineChart
     */

    //% block="draw chart number %num X-axis %xaxis Y-axis %yaxis styles %styles"
    //% inlineInputMode=inline
    //% weight=16
    export function lcdDrawChart(num: number, xaxis: string, yaxis: string, styles: ChartStyles) {

    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param color to color ,eg: 0xFF0000
     */

    //% block="adding chart data number %num color %color"
    //% color.shadow="colorNumberPicker"
    //% weight=14
    export function lcdAddChartData(num: number, color: number) {

    }

    /**
     * ...
     * @param num to num ,eg: 1
     * @param xaxis to xaxis ,eg: "Jan"
     * @param data to data ,eg: 80
     */

    //% block="set chart data number %num X-axis %xaxis data %data"
    //% weight=12
    export function lcdSetChartData(num: number, xaxis: string, data: number) {

    }

    /**
     * ...
     * @param type to type ,eg: LCDWidgetCategoryOne.Slider
     * @param num to num ,eg: 1
     * @param data to data ,eg: 80
     */

    //% block="%type=LCDWidgetCategoryOne_conv widget number %num data %data"
    //% weight=10
    export function lcdSetWidgetData(type: number, num: number, data: number) {

    }

    /**
     * ...
     * @param type to type ,eg: LCDWidgetCategoryTwo.Text
     * @param num to num ,eg: 1
     */

    //% block="delete %type=LCDWidgetCategoryTwo_conv widget number %num"
    //% weight=8
    export function lcdDeleteWidget(type: number, num: number) {

    }

    /**
     * return the corresponding LCDWidgetCategoryOne number
     */
    //% blockId="LCDWidgetCategoryOne_conv" block="%item"
    //% weight=2 blockHidden=true
    export function getWidgetCategoryOne(item: LCDWidgetCategoryOne): number {
        return item as number;
    }

    /**
     * return the corresponding LCDWidgetCategoryTwo number
     */
    //% blockId="LCDWidgetCategoryTwo_conv" block="%item"
    //% weight=1 blockHidden=true
    export function getLCDWidgetCategoryTwo(item: LCDWidgetCategoryTwo): number {
        return item as number;
    }

    function cleanScreen() {
        let cmd = creatCommand(0x1D, 0x04);
        writeCommand(cmd, 4);
        basic.pause(1500);
    }

    function setBackgroundColor(color: number) {
        let cmd = creatCommand(CMD_SET_BACKGROUND_COLOR, CMD_SET_LEN);
        cmd = cmd.concat(data24Tobyte(color));
        writeCommand(cmd, CMD_SET_LEN);
        basic.pause(300);
    }

    function setBackgroundImg(location: number, str: string) {
        let len = str.length;
        let cmd = creatCommand(CMD_SET_BACKGROUND_IMG, len + 5);
        cmd = cmd.concat([location]);
        str.split("").forEach((value, index) => { cmd.push(value.charCodeAt(0)) });
        writeCommand(cmd, len + 5);
    }

    function drawString(x: number, y: number, str: string, fontSize: number, color: number) {
        let len = str.length > 242 ? 242 : str.length;
        let cmd = creatCommand(CMD_OF_DRAW_TEXT, len + 13);
        cmd = cmd.concat([getID(CMD_OF_DRAW_TEXT), fontSize]).concat(data24Tobyte(color)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        str.split("").forEach((value, index) => { cmd.push(value.charCodeAt(0)) });
        writeCommand(cmd, len + 13);
    }

    function updateString(id: number, x: number, y: number, str: string, fontSize: number, color: number) {
        let len = str.length > 242 ? 242 : str.length;
        let cmd = creatCommand(CMD_OF_DRAW_TEXT, len + 13);
        cmd = cmd.concat([id, fontSize]).concat(data24Tobyte(color)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        str.split("").forEach((value, index) => { cmd.push(value.charCodeAt(0)) });
        writeCommand(cmd, len + 13);
    }

    function deleteString(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_TEXT, id])
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.textHead, id);
    }

    function drawLcdTime(x: number, y: number, hour: number, min: number, sec: number, fontSize: number, color: number) {
        drawString(x, y, `${hour < 10 ? "0" + hour : "" + hour}:${min < 10 ? "0" + min : "" + min}:${sec < 10 ? "0" + sec : "" + sec}`, fontSize, color);
    }

    function updateLcdTime(id: number, x: number, y: number, hour: number, min: number, sec: number, fontSize: number, color: number) {
        updateString(id, x, y, `${hour < 10 ? "0" + hour : "" + hour}:${min < 10 ? "0" + min : "" + min}:${sec < 10 ? "0" + sec : "" + sec}`, fontSize, color);
    }

    function drawIcon(x: number, y: number, str: string, zoom: number) {
        let len = str.length;
        let cmd = creatCommand(CMD_OF_DRAW_ICON_EXTERNAL, len + 11);
        cmd = cmd.concat([getID(CMD_OF_DRAW_ICON_INTERNAL)]).concat(data16Tobyte(zoom)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        str.split("").forEach((value, index) => { cmd.push(value.charCodeAt(0)) });
        writeCommand(cmd, len + 11);
    }

    function setAngleIcon(id: number, angle: number) {
        let cmd = creatCommand(CMD_SET_ANGLE_OBJ, CMD_SET_ANGLE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_ICON_INTERNAL, id]).concat(data16Tobyte(angle));
        writeCommand(cmd, CMD_SET_ANGLE_OBJ_LEN);
    }

    function updateIcon(id: number, x: number, y: number, str: string, zoom: number) {
        let len = str.length;
        let cmd = creatCommand(CMD_OF_DRAW_ICON_EXTERNAL, len + 11);
        cmd = cmd.concat([id]).concat(data16Tobyte(zoom)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        str.split("").forEach((value, index) => { cmd.push(value.charCodeAt(0)) });
        writeCommand(cmd, len + 11);
    }

    function deleteIcon(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_ICON_INTERNAL, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.iconHead, id);
    }

    function drawGif(x: number, y: number, str: string, zoom: number): number {
        let len = str.length;
        let cmd = creatCommand(CMD_OF_DRAW_GIF_INTERNAL, len + 11);
        let id = getID(CMD_OF_DRAW_GIF_INTERNAL);
        cmd = cmd.concat([id]).concat(data16Tobyte(zoom)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        str.split("").forEach((value, index) => { cmd.push(value.charCodeAt(0)) });
        writeCommand(cmd, len + 11);
        return id;
    }

    function deleteGif(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_GIF_INTERNAL, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.gifHead, id);
    }

    function drawLine(x0: number, y0: number, x1: number, y1: number, width: number, color: number) {
        let cmd = creatCommand(CMD_OF_DRAW_LINE, CMD_DRAW_LINE_LEN);
        cmd = cmd.concat([getID(CMD_OF_DRAW_LINE), width]).concat(data24Tobyte(color)).concat(data16Tobyte(x0)).concat(data16Tobyte(y0)).concat(data16Tobyte(x1)).concat(data16Tobyte(y1));
        writeCommand(cmd, CMD_DRAW_LINE_LEN);
    }

    function updateLine(id: number, x0: number, y0: number, x1: number, y1: number, width: number, color: number) {
        let cmd = creatCommand(CMD_OF_DRAW_LINE, CMD_DRAW_LINE_LEN);
        cmd = cmd.concat([id, width]).concat(data24Tobyte(color)).concat(data16Tobyte(x0)).concat(data16Tobyte(y0)).concat(data16Tobyte(x1)).concat(data16Tobyte(y1));
        writeCommand(cmd, CMD_DRAW_LINE_LEN);
        basic.pause(10);
    }

    function deleteLine(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_LINE, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.lineHead, id);
    }

    function drawRect(x: number, y: number, w: number, h: number, bw: number, boColor: number, fill: number, fillColor: number, rounded: number) {
        let cmd = creatCommand(CMD_OF_DRAW_RECT, CMD_OF_DRAW_RECT_LEN);
        cmd = cmd.concat([getID(CMD_OF_DRAW_RECT), bw]).concat(data24Tobyte(boColor)).concat([fill]).concat(data24Tobyte(fillColor)).concat([rounded]).concat(data16Tobyte(x)).concat(data16Tobyte(y)).concat(data16Tobyte(w)).concat(data16Tobyte(h));
        writeCommand(cmd, CMD_OF_DRAW_RECT_LEN);
    }

    function updateRect(id: number, x: number, y: number, w: number, h: number, bw: number, boColor: number, fill: number, fillColor: number, rounded: number) {
        let cmd = creatCommand(CMD_OF_DRAW_RECT, CMD_OF_DRAW_RECT_LEN);
        cmd = cmd.concat([id, bw]).concat(data24Tobyte(boColor)).concat([fill]).concat(data24Tobyte(fillColor)).concat([rounded]).concat(data16Tobyte(x)).concat(data16Tobyte(y)).concat(data16Tobyte(w)).concat(data16Tobyte(h));
        writeCommand(cmd, CMD_OF_DRAW_RECT_LEN);
    }

    function deleteRect(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_RECT, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.rectHead, id);
    }

    function drawCircle(x: number, y: number, r: number, bw: number, boColor: number, fill: number, fillColor: number) {
        let cmd = creatCommand(CMD_OF_DRAW_CIRCLE, CMD_OF_DRAW_CIRCLE_LEN);
        cmd = cmd.concat([getID(CMD_OF_DRAW_CIRCLE), bw]).concat(data24Tobyte(boColor)).concat([fill]).concat(data24Tobyte(fillColor)).concat(data16Tobyte(r)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        writeCommand(cmd, CMD_OF_DRAW_CIRCLE_LEN);
    }

    function updateCircle(id: number, x: number, y: number, r: number, bw: number, boColor: number, fill: number, fillColor: number) {
        let cmd = creatCommand(CMD_OF_DRAW_CIRCLE, CMD_OF_DRAW_CIRCLE_LEN);
        cmd = cmd.concat([id, bw]).concat(data24Tobyte(boColor)).concat([fill]).concat(data24Tobyte(fillColor)).concat(data16Tobyte(r)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        writeCommand(cmd, CMD_OF_DRAW_CIRCLE_LEN);
    }

    function deleteCircle(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_CIRCLE, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.circleHead, id);
    }

    function drawTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, bw: number, boColor: number, fill: number, fillColor: number) {
        let cmd = creatCommand(CMD_OF_DRAW_TRIANGLE, CMD_OF_DRAW_TRIANGLE_LEN);
        cmd = cmd.concat([getID(CMD_OF_DRAW_TRIANGLE), bw]).concat(data24Tobyte(boColor)).concat([fill]).concat(data24Tobyte(fillColor)).concat(data16Tobyte(x0)).concat(data16Tobyte(y0)).concat(data16Tobyte(x1)).concat(data16Tobyte(y1)).concat(data16Tobyte(x2)).concat(data16Tobyte(y2));
        writeCommand(cmd, CMD_OF_DRAW_TRIANGLE_LEN);
    }

    function updateTriangle(id: number, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, bw: number, boColor: number, fill: number, fillColor: number) {
        let cmd = creatCommand(CMD_OF_DRAW_TRIANGLE, CMD_OF_DRAW_TRIANGLE_LEN);
        cmd = cmd.concat([id, bw]).concat(data24Tobyte(boColor)).concat([fill]).concat(data24Tobyte(fillColor)).concat(data16Tobyte(x0)).concat(data16Tobyte(y0)).concat(data16Tobyte(x1)).concat(data16Tobyte(y1)).concat(data16Tobyte(x2)).concat(data16Tobyte(y2));
        writeCommand(cmd, CMD_OF_DRAW_TRIANGLE_LEN);
    }
    
    function deleteTriangle(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_TRIANGLE, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.triangleHead, id);
    }

    function creatSlider(x: number, y: number, w: number, h: number, color: number) {
        let cmd = creatCommand(CMD_OF_DRAW_SLIDER, CMD_OF_DRAW_SLIDER_LEN);
        cmd = cmd.concat([getID(CMD_OF_DRAW_SLIDER)]).concat(data24Tobyte(color)).concat(data16Tobyte(x)).concat(data16Tobyte(y)).concat(data16Tobyte(w)).concat(data16Tobyte(h));
        writeCommand(cmd, CMD_OF_DRAW_SLIDER_LEN);
    }

    function updateSlider(id: number, x: number, y: number, w: number, h: number, color: number) {
        let cmd = creatCommand(CMD_OF_DRAW_SLIDER, CMD_OF_DRAW_SLIDER_LEN);
        cmd = cmd.concat([id]).concat(data24Tobyte(color)).concat(data16Tobyte(x)).concat(data16Tobyte(y)).concat(data16Tobyte(w)).concat(data16Tobyte(h));
        writeCommand(cmd, CMD_OF_DRAW_SLIDER_LEN);
    }

    function setSliderValue(id: number, value: number) {
        let cmd = creatCommand(CMD_OF_DRAW_SLIDER_VALUE, CMD_SET_SLIDER_VALUE_LEN);
        cmd = cmd.concat([id]).concat(data16Tobyte(value));
        writeCommand(cmd, CMD_SET_SLIDER_VALUE_LEN);
    }

    function deleteSlider(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_SLIDER, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.sliderHead, id);
    }

    function creatBar(x: number, y: number, w: number, h: number, color: number) {
        let cmd = creatCommand(CMD_OF_DRAW_BAR, CMD_OF_DRAW_BAR_LEN);
        cmd = cmd.concat([getID(CMD_OF_DRAW_BAR)]).concat(data24Tobyte(color)).concat(data16Tobyte(x)).concat(data16Tobyte(y)).concat(data16Tobyte(w)).concat(data16Tobyte(h));
        writeCommand(cmd, CMD_OF_DRAW_BAR_LEN);
    }

    function updateBar(id: number, x: number, y: number, w: number, h: number, color: number) {
        let cmd = creatCommand(CMD_OF_DRAW_BAR, CMD_OF_DRAW_BAR_LEN);
        cmd = cmd.concat([id]).concat(data24Tobyte(color)).concat(data16Tobyte(x)).concat(data16Tobyte(y)).concat(data16Tobyte(w)).concat(data16Tobyte(h));
        writeCommand(cmd, CMD_OF_DRAW_BAR_LEN);
    }

    function setBarValue(id: number, value: number) {
        let cmd = creatCommand(CMD_OF_DRAW_BAR_VALUE, CMD_SET_BAR_VALUE_LEN);
        cmd = cmd.concat([id]).concat(data16Tobyte(value));
        writeCommand(cmd, CMD_SET_BAR_VALUE_LEN);
    }

    function deleteBar(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_BAR, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.barHead, id);
    }

    function creatCompass(x: number, y: number, diameter: number) {
        let cmd = creatCommand(CMD_OF_DRAW_COMPASS, CMD_DRAW_COMPASS_LEN);
        cmd = cmd.concat([getID(CMD_OF_DRAW_COMPASS)]).concat(data16Tobyte(diameter)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        writeCommand(cmd, CMD_DRAW_COMPASS_LEN);
    }

    function updateCompass(id: number, x: number, y: number, diameter: number) {
        let cmd = creatCommand(CMD_OF_DRAW_COMPASS, CMD_DRAW_COMPASS_LEN);
        cmd = cmd.concat([id]).concat(data16Tobyte(diameter)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        writeCommand(cmd, CMD_DRAW_COMPASS_LEN);
    }

    function setCompassScale(id: number, scale: number) {
        let cmd = creatCommand(CMD_OF_DRAW_COMPASS_VALUE, CMD_SET_COMPASS_VALUE_LEN);
        cmd = cmd.concat([id]).concat(data16Tobyte(scale));
        writeCommand(cmd, CMD_SET_COMPASS_VALUE_LEN);
    }

    function deleteCompass(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_COMPASS, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.compassHead, id);
    }

    function creatGauge(x: number, y: number, diameter: number, start: number, end: number, pointerColor: number, bgColor: number) {
        let cmd = creatCommand(CMD_OF_DRAW_GAUGE, CMD_OF_DRAW_GAUGE_LEN);
        cmd = cmd.concat([getID(CMD_OF_DRAW_GAUGE)]).concat(data16Tobyte(diameter)).concat(data16Tobyte(start)).concat(data16Tobyte(end)).concat(data24Tobyte(pointerColor)).concat(data24Tobyte(bgColor)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        writeCommand(cmd, CMD_OF_DRAW_GAUGE_LEN);
    }

    function updateGauge(id: number, x: number, y: number, diameter: number, start: number, end: number, pointerColor: number, bgColor: number) {
        let cmd = creatCommand(CMD_OF_DRAW_GAUGE, CMD_OF_DRAW_GAUGE_LEN);
        cmd = cmd.concat([id]).concat(data16Tobyte(diameter)).concat(data16Tobyte(start)).concat(data16Tobyte(end)).concat(data24Tobyte(pointerColor)).concat(data24Tobyte(bgColor)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        writeCommand(cmd, CMD_OF_DRAW_GAUGE_LEN);
    }

    function setGaugeValue(id: number, value: number) {
        let cmd = creatCommand(CMD_OF_DRAW_GAUGE_VALUE, CMD_SET_GAUGE_VALUE_LEN);
        cmd = cmd.concat([id]).concat(data16Tobyte(value));
        writeCommand(cmd, CMD_SET_GAUGE_VALUE_LEN);
    }

    function deleteGauge(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_GAUGE, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.gaugeHead, id);
    }

    function creatLineMeter(x: number, y: number, size: number, start: number, end: number, pointerColor: number, bgColor: number) {
        let cmd = creatCommand(CMD_OF_DRAW_LINE_METER, CMD_OF_DRAW_LINE_METER_LEN);
        cmd = cmd.concat([getID(CMD_OF_DRAW_LINE_METER)]).concat(data16Tobyte(size)).concat(data16Tobyte(start)).concat(data16Tobyte(end)).concat(data24Tobyte(pointerColor)).concat(data24Tobyte(bgColor)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        writeCommand(cmd, CMD_OF_DRAW_LINE_METER_LEN);
    }

    function updateLineMeter(id: number, x: number, y: number, size: number, start: number, end: number, pointerColor: number, bgColor: number) {
        let cmd = creatCommand(CMD_OF_DRAW_LINE_METER, CMD_OF_DRAW_LINE_METER_LEN);
        cmd = cmd.concat([id]).concat(data16Tobyte(size)).concat(data16Tobyte(start)).concat(data16Tobyte(end)).concat(data24Tobyte(pointerColor)).concat(data24Tobyte(bgColor)).concat(data16Tobyte(x)).concat(data16Tobyte(y));
        writeCommand(cmd, CMD_OF_DRAW_LINE_METER_LEN);
    }

    function setTopLineMeter(id: number) {
        let cmd = creatCommand(CMD_SET_TOP_OBJ, CMD_SET_TOP_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_LINE_METER, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
    }

    function deleteLineMeter(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_LINE_METER, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.lineMeterHead, id);
    }

    function creatChart(strX: string, strY: string, bgColor: number, type: number): number {
        let cmd = creatCommand(CMD_OF_DRAW_LINE_CHART, CMD_DRAW_CHART_LEN);
        let id = getID(CMD_OF_DRAW_LINE_CHART);
        cmd = cmd.concat([id, type]).concat(data24Tobyte(bgColor));
        writeCommand(cmd, CMD_DRAW_CHART_LEN);
        basic.pause(100);
        setChartAxisTexts(id, 0, strX);
        basic.pause(100);
        setChartAxisTexts(id, 1, strY);
        return id;
    }

    function updateChart(id: number, bgColor: number, type: number) {
        let cmd = creatCommand(CMD_OF_DRAW_LINE_CHART, CMD_DRAW_CHART_LEN);
        cmd = cmd.concat([id, type]).concat(data24Tobyte(bgColor));
        writeCommand(cmd, CMD_DRAW_CHART_LEN);
    }

    function creatChartSeries(chartId: number, color: number): number {
        let cmd = creatCommand(CMD_OF_DRAW_SERIE, CMD_DRAW_SERIE_LEN);
        let serieId = getID(CMD_OF_DRAW_SERIE);
        cmd = cmd.concat([serieId, chartId]).concat(data24Tobyte(color));
        writeCommand(cmd, CMD_DRAW_SERIE_LEN);
        return serieId;
    }

    function updateChartSeries(chartId: number, seriesId: number, color: number) {
        let cmd = creatCommand(CMD_OF_DRAW_SERIE, CMD_DRAW_SERIE_LEN);
        cmd = cmd.concat([seriesId, chartId]).concat(data24Tobyte(color));
        writeCommand(cmd, CMD_DRAW_SERIE_LEN);
    }

    function setChartAxisTexts(chartId: number, axis: number, text: string) {
        let len = text.length;
        let cmd = creatCommand(CMD_OF_DRAW_LINE_CHART_TEXT, len + 6);
        cmd = cmd.concat([chartId, axis]);
        text.split("").forEach((value, index) => { cmd.push(value.charCodeAt(0)) });
        writeCommand(cmd, len + 6);
    }

    function updateChartPoint(chartId: number, seriesId: number, pointNum: number, value: number) {
        let cmd = creatCommand(CMD_OF_DRAW_SERIE_DATA, 10);
        cmd = cmd.concat([chartId, seriesId, 1, pointNum]).concat(data16Tobyte(value));
        writeCommand(cmd, 10);
    }

    function addChartSeriesData(chartId: number, seriesId: number, point: number[], len: number): number {
        let cmd = creatCommand(CMD_OF_DRAW_SERIE_DATA, len*2 + 8);
        cmd = cmd.concat([chartId, seriesId, 0, 0]);
        point.forEach((value, index) => {  cmd = cmd.concat(data16Tobyte(value)) });
        writeCommand(cmd, len*2 + 8);
        return 1;
    }

    function setTopChart(id: number) {
        let cmd = creatCommand(CMD_SET_TOP_OBJ, CMD_SET_TOP_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_LINE_CHART, id]);
        writeCommand(cmd, CMD_SET_TOP_OBJ_LEN);
    }

    function deleteChart(id: number) {
        let cmd = creatCommand(CMD_DELETE_OBJ, CMD_DELETE_OBJ_LEN);
        cmd = cmd.concat([CMD_OF_DRAW_LINE_CHART, id]);
        writeCommand(cmd, CMD_DELETE_OBJ_LEN);
        deleteNodeByID(list.lineChartHead, id);
    }

    function setMeterValue(lineMeterId: number, value: number) {
        let cmd = creatCommand(CMD_OF_DRAW_LINE_METER_VALUE, CMD_SET_LINE_METER_VALUE_LEN);
        cmd = cmd.concat([lineMeterId]).concat(data16Tobyte(value));
        writeCommand(cmd, CMD_SET_LINE_METER_VALUE_LEN);
    }


    /********************************************************************************************************************/
    function creatList() {
        list.lineChartHead = new LinkedList();
        list.seriesHead = new LinkedList();
        list.compassHead = new LinkedList();
        list.textHead = new LinkedList();
        list.gaugeHead = new LinkedList();
        list.lineHead = new LinkedList();
        list.rectHead = new LinkedList();
        list.circleHead = new LinkedList();
        list.triangleHead = new LinkedList();
        list.lineMeterHead = new LinkedList();
        list.barHead = new LinkedList();
        list.sliderHead = new LinkedList();
        list.iconHead = new LinkedList();
        list.gifHead = new LinkedList();
    }
    
    function getID(type: number): number {
        let id = 0;
        switch (type) {
            case CMD_OF_DRAW_LINE_CHART:
                id = getNewID(list.lineChartHead);
                break;
            case CMD_OF_DRAW_SERIE:
                id = getNewID(list.seriesHead);
                break;
            case CMD_OF_DRAW_COMPASS:
                id = getNewID(list.compassHead);
                break;
            case CMD_OF_DRAW_TEXT:
                id = getNewID(list.textHead);
                break;
            case CMD_OF_DRAW_GAUGE:
                id = getNewID(list.gaugeHead);
                break;
            case CMD_OF_DRAW_LINE:
                id = getNewID(list.lineHead);
                break;
            case CMD_OF_DRAW_RECT:
                id = getNewID(list.rectHead);
                break;
            case CMD_OF_DRAW_TRIANGLE:
                id = getNewID(list.triangleHead);
                break;
            case CMD_OF_DRAW_CIRCLE:
                id = getNewID(list.circleHead);
                break;
            case CMD_OF_DRAW_LINE_METER:
                id = getNewID(list.lineMeterHead);
                break;
            case CMD_OF_DRAW_BAR:
                id = getNewID(list.barHead);
                break;
            case CMD_OF_DRAW_SLIDER:
                id = getNewID(list.sliderHead);
                break;
            case CMD_OF_DRAW_ICON_INTERNAL:
                id = getNewID(list.iconHead);
                break;
            case CMD_OF_DRAW_GIF_INTERNAL:
                id = getNewID(list.gifHead);
                break;
            default:
                break;
        }
        return id;
    }

    function getNewID(linkList: LinkedList): number {
        linkList.append();
        return linkList.head.id;
    }

    function deleteNodeByID(linkList: LinkedList, id: number) {
        linkList.removeId(id);
    }

    function data16Tobyte(data: number): number[] {
        return [data >> 8, data & 0xFF];
    }

    function data24Tobyte(data: number): number[] {
        return [data >> 16, data >> 8, data & 0xFF];
    }

    function creatCommand(cmd: number, len: number): number[] {
        return [CMD_HEADER_HIGH, CMD_HEADER_LOW, len - CMDLEN_OF_HEAD_LEN, cmd];
    }

    function writeCommand(data: number[], len: number) {
        if (protocol == Protocol.IIC) {
            let remain = len;
            let i = 0;
            while (remain > 0) {
                let currentTransferSize = (remain > IIC_MAX_TRANSFER_SIZE) ? 32 : remain;
                if (remain > IIC_MAX_TRANSFER_SIZE) {
                    pins.i2cWriteBuffer(address, pins.createBufferFromArray(data.slice(i * IIC_MAX_TRANSFER_SIZE, i * IIC_MAX_TRANSFER_SIZE + currentTransferSize)), false);
                } else {
                    pins.i2cWriteBuffer(address, pins.createBufferFromArray(data.slice(i * IIC_MAX_TRANSFER_SIZE, i * IIC_MAX_TRANSFER_SIZE + currentTransferSize)), true);
                }
                remain = remain - currentTransferSize;
                i = i + 1;
            }
        } else {

        }
        
    }

    function readACK(length: number): Buffer {
        if (protocol == Protocol.IIC) {
            let remain = length;
            let buf: Buffer = pins.createBuffer(0);
            while (remain) {
                let currentTransferSize = (remain > IIC_MAX_TRANSFER_SIZE) ? IIC_MAX_TRANSFER_SIZE : remain;
                buf = buf.concat(pins.i2cReadBuffer(address, currentTransferSize));
                remain = remain - currentTransferSize;
            }
            return buf;
        } else {
            let buf: Buffer = pins.createBuffer(0);
            return buf;
        }  
    }
}