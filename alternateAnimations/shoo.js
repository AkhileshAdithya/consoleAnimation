var count = 0

setInterval(function() {
    count++
    if(count % 6 == 0) {
        console.clear()
        console.log("╭∩╮(︶︿︶)╭∩╮")
    }
    else if(count % 6 == 1){
        console.clear()
        console.log("  ╭∩╮(︶︿︶)╭∩╮")
    }
    else if(count % 6 == 2) {
        console.clear()
        console.log("    ╭∩╮(︶︿︶)╭∩╮")
    }
    else if(count % 6 == 3) {
        console.clear()
        console.log("      ╭∩╮(︶︿︶)╭∩╮")
    }
    else if(count % 6 == 4) {
        console.clear()
        console.log("    ╭∩╮(︶︿︶)╭∩╮")
    }
    else if(count % 6 == 5) {
        console.clear()
        console.log("  ╭∩╮(︶︿︶)╭∩╮")
    }
},400)