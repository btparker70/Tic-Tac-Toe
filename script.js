// Player move
$('.game-board').on('click', '.block', function () {
    if ($(this).find('i').length == 0) {
        $(this).prepend('<i class="fas fa-times fa-5x"></i>').attr('marker', 'x');
        cpuMove();
        winChecker();
    }
})

// Clear board
$('#new-game').on('click', function () {
    $('.block').empty();
})

// CPU move
function cpuMove() {
    for (i = 1; i < 10; i++) {
        let randomNum = Math.floor(Math.random() * 9) + 1;
        if ($(`#block_${randomNum}`).find('i').length == 0) {
            $(`#block_${randomNum}`).prepend('<i class="far fa-circle fa-4x"></i>').attr('marker', 'o');
            break;
        }
    }
}

// Win line
function strikeMakerHorizontal(num1, num2, num3) {
    $(`#block_${num1}`).prepend('<i class="fas fa-minus"></i>');
    $(`#block_${num2}`).prepend('<i class="fas fa-minus"></i>');
    $(`#block_${num3}`).prepend('<i class="fas fa-minus"></i>');
}

function strikeMakerVertical(num1, num2, num3) {
    $(`#block_${num1}`).prepend('<i class="fas fa-minus vertical"></i>');
    $(`#block_${num2}`).prepend('<i class="fas fa-minus vertical"></i>');
    $(`#block_${num3}`).prepend('<i class="fas fa-minus vertical"></i>');
}

function strikeMakerDiagonalLeft(num1, num2, num3) {
    $(`#block_${num1}`).prepend('<i class="fas fa-minus diagonal-left"></i>');
    $(`#block_${num2}`).prepend('<i class="fas fa-minus diagonal-left"></i>');
    $(`#block_${num3}`).prepend('<i class="fas fa-minus diagonal-left"></i>');
}

function strikeMakerDiagonalRight(num1, num2, num3) {
    $(`#block_${num1}`).prepend('<i class="fas fa-minus diagonal-right"></i>');
    $(`#block_${num2}`).prepend('<i class="fas fa-minus diagonal-right"></i>');
    $(`#block_${num3}`).prepend('<i class="fas fa-minus diagonal-right"></i>');
}

// Win checker
function winChecker() {
    var markers = [];
    for (i = 1; i < 10; i++) {
        markers.push($(`#block_${i}`).attr('marker'));
    }
    // Horizontal
    if (markers[0] + markers[1] + markers[2] === 'xxx' || markers[0] + markers[1] + markers[2] === 'ooo') {
        strikeMakerHorizontal(1, 2, 3);
    }
    if (markers[3] + markers[4] + markers[5] === 'xxx' || markers[3] + markers[4] + markers[5] === 'ooo') {
        strikeMakerHorizontal(4, 5, 6);
    }
    if (markers[6] + markers[7] + markers[8] === 'xxx' || markers[6] + markers[7] + markers[8] === 'ooo') {
        strikeMakerHorizontal(7, 8, 9);
    }

    // Vertical
    if (markers[0] + markers[3] + markers[6] === 'xxx' || markers[0] + markers[3] + markers[6] === 'ooo') {
        strikeMakerVertical(1, 4, 7);
    }
    if (markers[1] + markers[4] + markers[7] === 'xxx' || markers[1] + markers[4] + markers[7] === 'ooo') {
        strikeMakerVertical(2, 5, 8);
    }
    if (markers[2] + markers[5] + markers[8] === 'xxx' || markers[2] + markers[5] + markers[8] === 'ooo') {
        strikeMakerVertical(3, 6, 9);
    }

    // Diagonal
     if (markers[0] + markers[4] + markers[8] === 'xxx' || markers[0] + markers[4] + markers[8] === 'ooo') {
        strikeMakerDiagonalLeft(1, 5, 9);
    }
    if (markers[2] + markers[4] + markers[6] === 'xxx' || markers[2] + markers[4] + markers[6] === 'ooo') {
        strikeMakerDiagonalRight(3, 5, 7);
    }
}