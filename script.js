var colorIndex = 0;

document.getElementById("add").addEventListener("click",function(){
    
    var activity = document.getElementById("Activity").value;

    if (!activity){
        event.preventDefault();
        alert("Please input an activty");
        return;
    }

    var colors = [ "rgb(176, 121, 228)", "rgb(241, 133, 196)", "rgb(133, 183, 241)", "rgb(236, 219, 59)"];
    var newItem = document.createElement("li");
    
    /*var checkbox = document.createElement("input");
    checkbox.type ="checkbox";
    checkbox.className="checkbox";
    checkbox.style.borderColor = colors[colorIndex];*/
    newItem.style.color = colors[colorIndex];

    newItem.appendChild(document.createTextNode(activity));
    //newItem.appendChild(checkbox);
    
    document.getElementById("userList").appendChild(newItem);

    colorIndex = (colorIndex + 1) % colors.length;

    document.getElementById("Activity").value='';
});

document.getElementById("userName").addEventListener("click",function(){
    var userName = document.getElementById("name").value.toUpperCase();
    var colors = ["rgb(176, 121, 228)", "rgb(176, 121, 228)", "rgb(248, 98, 185)", "rgb(55, 192, 191)", "rgb(236, 208, 59)"];
    var words = [userName,"'S", "TO", "DO", "LIST"];

    var styledText = words.map((word, index) => 
        `<span style="color: ${colors[index]}">${word}</span>`
    ).join(" ");

    document.getElementById("user_to-do_list").innerHTML= styledText;
});

/*document.getElementsByClassName("checkbox").addEventListener("click", function() {
    checkbox.value = "✔";
    checkbox.value.color =colors[colorIndex];
});*/