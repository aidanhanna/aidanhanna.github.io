
let selected = "";
let tabs = [];


function set_tabs(new_tabs) {
    tabs = new_tabs;
}
function select_tab(new_tab) {
    if (new_tab == selected) {
        return;
    }
    for (let i in tabs) {
        tab = tabs[i];
        if (tab == new_tab) {
            document.getElementById(tab + "-tab").classList.add('tab-selected');
            document.getElementById(tab + "-tab").classList.remove('tab-unselected');
            document.getElementById(tab + "-content").classList.add('content-visible');
            document.getElementById(tab + "-content").classList.remove('content-hidden');
        }
        else {
            document.getElementById(tab + "-tab").classList.add('tab-unselected');
            document.getElementById(tab + "-tab").classList.remove('tab-selected');
            document.getElementById(tab + "-content").classList.add('content-hidden');
            document.getElementById(tab + "-content").classList.remove('content-visible');
        }
    }
}

/*

document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if (document.getElementById("MyElement").classList.contains('MyClass'))

    document.getElementById("MyElement").classList.toggle('MyClass');

*/

