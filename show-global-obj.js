let args = [...process.argv];

switch (args[2]){
    case "1":
        console.log(global)
        break;
    case "2":
        console.log(process)
        break;
    default:
        console.log("Hello from Node Global Objects")
}
