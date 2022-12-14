export function directiveTiem(app: any) {
    app.directive('time', {
      mounted: (el: any) => {
        el.textContent = formatTimeStamp(el.textContent * 1000)
      }
    })
  }
function formatTimeStamp(TimeStamp: number) {
    const date = new Date(TimeStamp)
    const y = date.getFullYear()
    let MM: number | string = date.getMonth() + 1
    MM = MM < 10 ? '0' + MM : MM
    let d: number | string = date.getDate()
    d = d < 10 ? '0' + d : d
    // const h: number | string = date.getHours()
    // h = h < 10 ? '0' + h : h
    // let m: number | string = date.getMinutes()
    // m = m < 10 ? '0' + m : m
    // let s: number | string = date.getSeconds()
    // s = s < 10 ? '0' + s : s
    return y + '-' + MM + '-' + d
}