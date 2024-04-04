<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
        <title>Calculator</title>
</head>
<body>
<div class="w-full h-screen flex justify-center align-center bg-[#f8dc2c]">
    <div class="border-2 self-center rounded-lg">
        <div class="py-4 px-4 w-full border-b-2 bg-header">
            <input class="w-full h-[50px] px-2 border-2 border-header text-xl rounded-lg font-bold" type="text" id="result">
        </div>
        <div class="px-4 py-4 bg-body">
            <div class="grid grid-cols-4 gap-2 mb-2">
                <input type="button" value="Clear" class="border-2 bg-topButtons text-white text-lg px-2 py-2 rounded-lg" onClick="clearScreen()"></input>
                <button class="border-2 bg-topButtons text-white text-lg px-2 py-2 rounded-lg">M+</button>
                <input type="button" value="/" class="operator border-2 bg-topButtons text-white text-lg px-2 py-2 rounded-lg" onClick="display('/')"></input>
                <input type="button" value="*" class="operator border-2 bg-topButtons text-white text-lg px-2 py-2 rounded-lg" onClick="display('*')"></input>
            </div>
            <div class="grid grid-cols-4 gap-2 mb-2">
                <input type="button" value="7" class="button border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('7')"></input>
                <input type="button" value="8" class="button border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('8')"></input>
                <input type="button" value="9" class="button border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('9')"></input>
                <input type="button" value="-" class="operator border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('-')"></input>
            </div>
            <div class="grid grid-cols-4 gap-2 mb-2">
                <input type="button" value="4" class="button border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('4')"></input>
                <input type="button" value="5" class="button border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('5')"></input>
                <input type="button" value="6" class="button border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('6')"></input>
                <input type="button" value="+" class="operator border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('+')"></input>
            </div>
            <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="col-span-2">
                <div class="grid grid-cols-3 gap-2 mb-2">
                <input type="button" value="1" class="button border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('1')"></input>
                <input type="button" value="2" class="button border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('2')"></input>
                <input type="button" value="3" class="button border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('3')"></input>
                </div>
                <div class="grid grid-cols-3 gap-2 mb-2">
                <input type="button" value="0" class="button border-2 col-span-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('0')"></input>
                <input type="button" value="." class="button border-2 bg-header text-white text-xl px-2 py-2 rounded-lg border-header" onClick="display('.')"></input>
                </div>
            </div>
            <div class="grid justify-items-stretch">
                <input type="button" value="=" class="operator border-2 bg-equal text-white text-xl px-2 py-2 rounded-lg border-equal" onClick="solve()"></input>
            </div>
        </div>
    </div>
</div>
</body>
<script src="../js/index.js"></script>
</html>