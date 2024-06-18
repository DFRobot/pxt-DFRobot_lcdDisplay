// function testBackgroundColor() {
//     lcdDisplay.lcdSetBgcolor(0xFF0000)
//     basic.pause(1000)
//     lcdDisplay.lcdSetBgcolor(0x00FF00)
//     basic.pause(1000)
//     lcdDisplay.lcdSetBgcolor(0x0000FF)
//     basic.pause(1000)
//     lcdDisplay.lcdSetBgcolor(0xFFFFFF)
//     basic.pause(1000)
// }
// function testLineMeter() {
//     x = 0
//     y = 0
//     lcdDisplay.lcdDrawLineMeter(1, 0, 0, 120, 0, 100, 0xFF0000, 0x00FF00)
//     lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.LineMeter), 1, 40)
//     for (let index3 = 0; index3 <= 6; index3++) {
//         lcdDisplay.lcdDrawLineMeter(1, index3 * 32, 0, 120, 0, 100, 0xFF0000, 0x00FF00)
//         basic.pause(100)
//     }
//     lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.LineMeter), 1)
//     basic.pause(100)
//     for (let index32 = 0; index32 <= 11; index32++) {
//         lcdDisplay.lcdDrawLineMeter(index32 + 1, x, y, 80, 0, 60, generateRandomColor(), generateRandomColor())
//         lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.LineMeter), index32 + 1, randint(0, 60))
//         if ((index32 + 1) % 4 == 0) {
//             y += 80
//             x = 0
//         } else {
//             x += 80
//         }
//         basic.pause(100)
//     }
//     basic.pause(1000)
//     for (let index33 = 0; index33 <= 11; index33++) {
//         lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.LineMeter), index33 + 1)
//         basic.pause(100)
//     }
//     for (let index34 = 0; index34 <= 9; index34++) {
//         lcdDisplay.lcdDrawLineMeter(1, 0, 0, 120 + index34 * 12, 0, 100, 0xFF0000, 0x00FF00)
//         basic.pause(100)
//     }
//     for (let index = 0; index < 10; index++) {
//         lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.LineMeter), 1, randint(0, 100))
//         basic.pause(100)
//     }
//     lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.LineMeter), 1)
// }
// function testChart() {
//     lcdDisplay.lcdDrawChart(1, "Jan Feb Mar Apr May Jun", "100 80 60 40 20 0", 0xffffff, lcdDisplay.ChartStyles.LineChart)
//     lcdDisplay.lcdAddChartData(1, 0xFF0000)
//     lcdDisplay.lcdSetChartData(1, "Jan", 100)
//     lcdDisplay.lcdSetChartData(1, "Feb", 200)
//     lcdDisplay.lcdSetChartData(1, "Mar", 300)
//     lcdDisplay.lcdSetChartData(1, "Apr", 500)
//     lcdDisplay.lcdSetChartData(1, "May", 200)
//     lcdDisplay.lcdSetChartData(1, "Jun", 400)
//     lcdDisplay.lcdUpdateChart(1, 0xb09eff, lcdDisplay.ChartStyles.ShadingLineChart)
// }
// function testBar() {
//     lcdDisplay.lcdDrawBar(1, 0, 10, 10, 200, 0xff0000)
//     lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.Bar), 1, 50)
//     for (let index36 = 0; index36 <= 10; index36++) {
//         lcdDisplay.lcdDrawBar(1, 31 * index36, 10, 10, 200, generateRandomColor())
//         basic.pause(100)
//     }
//     for (let index5 = 0; index5 <= 10; index5++) {
//         lcdDisplay.lcdDrawBar(1, 310 - 31 * index5, 10, 10, 200, generateRandomColor())
//         basic.pause(100)
//     }
//     basic.pause(1000)
//     for (let index6 = 0; index6 <= 10; index6++) {
//         lcdDisplay.lcdDrawBar(1 + index6, 31 * index6, 10, 10, 200 - 10 * index6, generateRandomColor())
//         basic.pause(100)
//     }
//     basic.pause(1000)
//     for (let index7 = 0; index7 <= 10; index7++) {
//         lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.Bar), 1 + index7, randint(0, 100))
//         basic.pause(100)
//     }
//     basic.pause(1000)
//     for (let index8 = 0; index8 <= 10; index8++) {
//         lcdDisplay.lcdDrawBar(1 + index8, 10, 23 * index8, 310 - 20 * index8, 10, generateRandomColor())
//         basic.pause(100)
//     }
//     basic.pause(1000)
//     for (let index9 = 0; index9 <= 10; index9++) {
//         lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.Bar), 1 + index9)
//         basic.pause(100)
//     }
// }
// function testGauge() {
//     x = 0
//     y = 0
//     lcdDisplay.lcdDrawGauge(1, 0, 0, 120, 0, 100, 0xFF0000, 0x00FF00)
//     lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.Gauge), 1, 40)
//     for (let index2 = 0; index2 <= 6; index2++) {
//         lcdDisplay.lcdDrawGauge(1, index2 * 32, 0, 120, 0, 100, 0xFF0000, 0x00FF00)
//         basic.pause(100)
//     }
//     lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.Gauge), 1)
//     basic.pause(100)
//     for (let index22 = 0; index22 <= 11; index22++) {
//         lcdDisplay.lcdDrawGauge(index22 + 1, x, y, 120, 0, 60, generateRandomColor(), generateRandomColor())
//         lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.Gauge), index22 + 1, randint(0, 60))
//         if ((index22 + 1) % 4 == 0) {
//             y += 80
//             x = 0
//         } else {
//             x += 80
//         }
//         basic.pause(100)
//     }
//     basic.pause(1000)
//     for (let index23 = 0; index23 <= 11; index23++) {
//         lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.Gauge), index23 + 1)
//         basic.pause(100)
//     }
//     for (let index24 = 0; index24 <= 9; index24++) {
//         lcdDisplay.lcdDrawGauge(1, 0, 0, 120 + index24 * 12, 0, 100, generateRandomColor(), generateRandomColor())
//         basic.pause(100)
//     }
//     for (let index = 0; index < 10; index++) {
//         lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.Gauge), 1, randint(0, 100))
//         basic.pause(100)
//     }
//     lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.Gauge), 1)
// }
// function generateRandomColor() {
//     return lcdDisplay.lcdGetRgbColor(randint(0, 255), randint(0, 255), randint(0, 255))
// }
// function testDrawString() {
//     lcdDisplay.lcdDisplayText("hello world", 1, 10, 10, lcdDisplay.FontSize.Small, 0xFF0000)
//     lcdDisplay.lcdDisplayText("hello world", 2, 10, 100, lcdDisplay.FontSize.Large, 0x0000ff)
// }
// function testDrawIcon() {
//     lcdDisplay.lcdDisplayIamge(10, "rose.png", 0, 0, 256)
//     lcdDisplay.lcdDisplayIamge(1, "expression icon\\angry.png", 0, 20, 256)
//     lcdDisplay.lcdDisplayIamge(2, "expression icon\\blink.png", 64, 20, 256)
//     lcdDisplay.lcdDisplayIamge(3, "expression icon\\cry.png", 128, 20, 256)
//     lcdDisplay.lcdDisplayIamge(4, "expression icon\\cute.png", 192, 20, 256)
//     lcdDisplay.lcdDisplayIamge(5, "expression icon\\dizzy.png", 256, 20, 256)
//     lcdDisplay.lcdDisplayIamge(6, "safe icon\\fire.png", 50, 130, 512)
//     lcdDisplay.lcdDisplayIamge(7, "safe icon\\dial.png", 190, 130, 512)
//     angle = 0
//     for (let index = 0; index < 4; index++) {
//         angle += 90
//         for (let index26 = 0; index26 <= 7; index26++) {
//             lcdDisplay.lcdRotateIamge(index26 + 1, angle)
//         }
//         basic.pause(1000)
//         lcdDisplay.lcdSetBgIamge("rose.png")
//     }
//     lcdDisplay.lcdClearAll()
//     lcdDisplay.lcdDisplayGif(1, "Snowy.gif", 120, 120, 256)
// }
// function testTriangles() {
//     for (let index42 = 0; index42 <= 10; index42++) {
//         lcdDisplay.lcdDrawTriangle(1, 160, 12 * index42, 16 * index42, 239 - 12 * index42, 319 - 16 * index42, 239 - 12 * index42, 1, 0xFF0000, lcdDisplay.DrawType.NotFill, 0x00ff00)
//         basic.pause(200)
//     }
//     for (let index422 = 0; index422 <= 10; index422++) {
//         lcdDisplay.lcdDrawTriangle(index422 + 1, 160, 12 * (9 - index422), 16 * (9 - index422), 239 - 12 * (9 - index422), 319 - 16 * (9 - index422), 239 - 12 * (9 - index422), 1, 0xFF0000, lcdDisplay.DrawType.NotFill, 0x00ff00)
//     }
//     basic.pause(200)
// }
// function testBackgroundImg() {
//     lcdDisplay.lcdSetBgIamge("bud.png")
//     basic.pause(1000)
//     lcdDisplay.lcdSetBgIamge("building.png")
//     basic.pause(1000)
//     lcdDisplay.lcdSetBgIamge("landscape.png")
//     basic.pause(1000)
// }
// function testSlider() {
//     lcdDisplay.lcdDrawSlider(1, 0, 10, 10, 200, 0xff0000)
//     lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.Slider), 1, 50)
//     for (let index322 = 0; index322 <= 10; index322++) {
//         lcdDisplay.lcdDrawSlider(1, 31 * index322, 10, 10, 200, generateRandomColor())
//         basic.pause(100)
//     }
//     for (let index52 = 0; index52 <= 10; index52++) {
//         lcdDisplay.lcdDrawSlider(1, 310 - 31 * index52, 10, 10, 200, generateRandomColor())
//         basic.pause(100)
//     }
//     basic.pause(1000)
//     for (let index62 = 0; index62 <= 10; index62++) {
//         lcdDisplay.lcdDrawSlider(1 + index62, 31 * index62, 10, 10, 200 - 10 * index62, generateRandomColor())
//         basic.pause(100)
//     }
//     basic.pause(1000)
//     for (let index72 = 0; index72 <= 10; index72++) {
//         lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.Slider), 1 + index72, randint(0, 100))
//         basic.pause(100)
//     }
//     basic.pause(1000)
//     for (let index82 = 0; index82 <= 10; index82++) {
//         lcdDisplay.lcdDrawSlider(1 + index82, 10, 23 * index82, 310 - 20 * index82, 10, generateRandomColor())
//         basic.pause(100)
//     }
//     basic.pause(1000)
//     for (let index92 = 0; index92 <= 10; index92++) {
//         lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.Slider), 1 + index92)
//         basic.pause(100)
//     }
// }
// function testCircles() {
//     bgColor = generateRandomColor()
//     for (let index43 = 0; index43 <= 20; index43++) {
//         lcdDisplay.lcdDrawCircle(1, 160, 120, 6 * index43, 2, bgColor, lcdDisplay.DrawType.NotFill, 0x0000ff)
//         basic.pause(200)
//     }
//     for (let index44 = 0; index44 <= 19; index44++) {
//         bgColor = generateRandomColor()
//         lcdDisplay.lcdDrawCircle(index44 + 1, 160, 120, 120 - 6 * (index44 + 1), 2, bgColor, lcdDisplay.DrawType.NotFill, 0x0000ff)
//     }
// }
// function testCompass() {
//     x = 0
//     y = 0
//     lcdDisplay.lcdDrawCompass(1, x, y, 64)
//     for (let index102 = 0; index102 <= 19; index102++) {
//         lcdDisplay.lcdDrawCompass(1, x, y, 64)
//         if ((index102 + 1) % 5 == 0) {
//             y += 64
//             x = 0
//         } else {
//             x += 64
//         }
//         basic.pause(200)
//     }
//     lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.Compass), 1)
//     basic.pause(200)
//     x = 0
//     y = 0
//     for (let index1022 = 0; index1022 <= 19; index1022++) {
//         lcdDisplay.lcdDrawCompass(index1022 + 1, x, y, 64)
//         if ((index1022 + 1) % 5 == 0) {
//             y += 64
//             x = 0
//         } else {
//             x += 64
//         }
//         basic.pause(200)
//     }
//     basic.pause(1000)
//     for (let index103 = 0; index103 <= 19; index103++) {
//         lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.Compass), index103 + 1)
//         basic.pause(200)
//     }
//     for (let index104 = 0; index104 <= 7; index104++) {
//         lcdDisplay.lcdDrawCompass(1, 0, 0, 30 * (index104 + 1))
//         basic.pause(100)
//     }
//     for (let index105 = 0; index105 <= 35; index105++) {
//         lcdDisplay.lcdSetWidgetData(lcdDisplay.getWidgetCategoryOne(LCDWidgetCategoryOne.Compass), 1, index105 * 100)
//         basic.pause(50)
//     }
//     lcdDisplay.lcdDeleteWidget(lcdDisplay.getLCDWidgetCategoryTwo(LCDWidgetCategoryTwo.Compass), 1)
// }
// function testRects() {
//     for (let index3222 = 0; index3222 <= 20; index3222++) {
//         x = 320 / 40 * index3222
//         y = 240 / 40 * index3222
//         w = 320 - x * 2
//         h = 240 - y * 2
//         basic.pause(200)
//         lcdDisplay.lcdDrawRectangle(1, x, y, w, h, 16744448, generateRandomColor(), lcdDisplay.DrawType.NotFill, lcdDisplay.lcdGetRgbColor(0, 255, 255), lcdDisplay.RectangleRound.NoneRound)
//     }
//     for (let index45 = 0; index45 <= 21; index45++) {
//         x = 320 / 40 * (20 - index45)
//         y = 240 / 40 * (20 - index45)
//         w = 320 - x * 2
//         h = 240 - y * 2
//         basic.pause(200)
//         lcdDisplay.lcdDrawRectangle(1, x, y, w, h, 16744448, generateRandomColor(), lcdDisplay.DrawType.NotFill, lcdDisplay.lcdGetRgbColor(0, 255, 255), lcdDisplay.RectangleRound.NoneRound)
//     }
// }
// function testLine() {
//     lineNum = 1
//     color = 16711680
//     for (let index522 = 0; index522 <= 320 / 5; index522++) {
//         lcdDisplay.lcdDrawLine(lineNum, 320 / 2, 240 / 2, index522 * 5, 0, 1, color)
//         color += -262144
//         lineNum += 1
//     }
//     color = 65280
//     for (let index622 = 0; index622 <= 240 / 5; index622++) {
//         lcdDisplay.lcdDrawLine(lineNum, 320 / 2, 240 / 2, 319, index622 * 5, 1, color)
//         color += -1280
//         lineNum += 1
//     }
//     color = 255
//     for (let index722 = 0; index722 <= 320 / 5; index722++) {
//         lcdDisplay.lcdDrawLine(lineNum, 320 / 2, 240 / 2, 320 - index722 * 5, 239, 1, color)
//         color += -4
//         lineNum += 1
//     }
//     color = 16776960
//     for (let index822 = 0; index822 <= 240 / 5; index822++) {
//         lcdDisplay.lcdDrawLine(lineNum, 320 / 2, 240 / 2, 0, 240 - index822 * 5, 1, color)
//         color += -328960
//         lineNum += 1
//     }
// }
// let color = 0
// let lineNum = 0
// let h = 0
// let w = 0
// let bgColor = 0
// let angle = 0
// let y = 0
// let x = 0
// lcdDisplay.lcdInitIIC()
// lcdDisplay.lcdClearAll()
// lcdDisplay.lcdSetBgcolor(0xffffff)
// basic.pause(500)
// testChart()
