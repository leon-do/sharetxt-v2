const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVlZTM3ZTI1OGNkYzYwMmI5YmZjZmM1MjYyMWQ2N2M0OGVkOTlmYjQ3NTMxMWU3M2E3MTM5OGZlMmViNGVhMWRiMzlkZGVlNWFjNTk0M2I1In0.eyJhdWQiOiI2IiwianRpIjoiNWVlMzdlMjU4Y2RjNjAyYjliZmNmYzUyNjIxZDY3YzQ4ZWQ5OWZiNDc1MzExZTczYTcxMzk4ZmUyZWI0ZWExZGIzOWRkZWU1YWM1OTQzYjUiLCJpYXQiOjE1NzQxOTk3MTYsIm5iZiI6MTU3NDE5OTcxNiwiZXhwIjoxNjA1ODIyMTE2LCJzdWIiOiIzNCIsInNjb3BlcyI6W119.BBDIj2rYKXKhMJckFBSMYPeExYTk0owBILzbdlD_VCBGHqwxUQBNuGmZmPFOQ1fQvjd3yfTVsEceOO4joqWGawkivDs9Ih2QgC9fP0uLpE3W5YvVH-OUvCoqMPBPxwno3Pyfi6hQc_tEBrzwd3Y3cVk2K89RO8tkuHKAPGULB09UkJ3FOQeF-auXX3svvJtYqCCDBHCQ2n5bGjHUXTqMibwJZSB1b0WHiDmBr2XR9FDKtWlRiiuMxHFAJtFS1dMU5v6GYf_kAyEffLRohE0d4WydJSM9tXvXMtQI75Qpa0m6tCTFT40vu8mMXw2E1OcCOFU4Zk9QC-a5ekJ3B0tXuxCTh07YwX8v8Fr3aRWgFXNM4td0TvblcdVubUOyw5hJObcNpY_v0TI6S1KotAhmZ2siaHtKkAGC3kTV2TqM33WfFbsd-t-Y_9Bm_iUPChESwUoCdB1rYL7NcAmq6LFT8z-GTgqa7pkIeVY8g3gu1HnL9ZvAkq7WGttHeZSuvaPoWqgShDfKGMy7FlCno5H2bhXp1O_puYSHqJn9KdCSjrTLry2Y-GrxljWWII-Q7HB7ucY4EEWF38715zAafAEZFPeF2B_ruKwQ8PrPQYdKFQC69B_Wo8t5CQkKDEfYQfCM06EVMjoc2vPbf639ylNr8DWNytvfx437UHrJ7Z9yyVQ'

// number between 1-10000
const channelId = '123'

const socket = new WebSocket(
  `wss://connect.websocket.in/v2/${channelId}?token=${token}`
);

// Connection opened
socket.addEventListener('open', function(event) {
  document.addEventListener('keyup', e => {
    const text = document.getElementById('txtArea').value;
  socket.send(text);
  });
});

// Listen for messages
socket.addEventListener('message', function(event) {
  document.getElementById('txtArea').value = event.data;
});
