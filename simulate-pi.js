"use strict";

const random = (lowerIn, upperEx) => {
    return Math.round(Math.random() * (upperEx - lowerIn)) + lowerIn;
}

const drawCircle = (ctx, x0, y0, radius, color) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(x0, y0, radius, 0, 2 * Math.PI);
    ctx.stroke();
};

const distance = (x0, y0, x, y) => {
    return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2));
};

const main = () => {
    const pointsSpan = document.getElementById("points");
    const insideSpan = document.getElementById("inside");
    const outsideSpan = document.getElementById("outside");
    const ratioSpan = document.getElementById("ratio");
    const resultSpan = document.getElementById("result");

    const board = document.getElementById("board");
    const context = board.getContext("2d");

    const width = parseInt(board.getAttribute("width"));
    const height = parseInt(board.getAttribute("height"));
    if (width != height) {
        console.log("canvas must be rectangular");
        return;
    }

    const x0 = width / 2;
    const y0 = height / 2;
    const r = height / 2;
    drawCircle(context, x0, y0, r, "black");

    const totalCycles = 10000;
    const intervalTimingMillis = 5;
    const updateTimingMillis = 500;
    const updateEveryNthCycle = Math.round(updateTimingMillis / intervalTimingMillis);
    let i = 0;
    let inside = 0;
    let outside = 0;
    const interval = setInterval(() => {
        const x = random(0, width + 1);
        const y = random(0, height + 1);
        const d = distance(x0, y0, x, y);
        if (d > r) {
            drawCircle(context, x, y, 1, "red");
            outside++;
        } else {
            drawCircle(context, x, y, 1, "green");
            inside++;
        }
        i++;
        if (i % updateEveryNthCycle == 0) {
            const ratio = inside / i;
            resultSpan.textContent = ratio * 4;
            pointsSpan.textContent = i;
            insideSpan.textContent = inside;
            outsideSpan.textContent = outside;
            ratioSpan.textContent = ratio;
        }
        if (i == totalCycles) {
            clearInterval(interval);
        }
    }, intervalTimingMillis);
};

document.addEventListener("DOMContentLoaded", main);
