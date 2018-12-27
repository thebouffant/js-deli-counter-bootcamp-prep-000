
function takeANumber(queue, newCustomer){
  queue.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${queue.length} in line.`
}

function nowServing(currentLine){
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!"
  } else{
    var currentCust = currentLine[0]
    currentLine.shift()
    return `Currently serving ${currentCust}.`
  }
}

function currentLine(line){
  
  if (line.length === 0){
    return "The line is currently empty."
  } else{
    var lineString = "The line is currently: "
    var i;
  for (i = 0; i < line.length; i++) { 
  if (i == line.length - 1){
    lineString += `${i + 1}. ${line[i]}`
  } else
  lineString += `${i + 1}. ${line[i]}, `
  }
    return lineString
  }
}
