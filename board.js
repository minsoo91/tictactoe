(function() {
	var board_dup = new Array(9);
	var turn = false
	var mark = "X"

	var setBoard = function () {	
		var grid = new Array(9);
		for(i = 0; i < 9; i++) {
			grid[i] = document.createElement("canvas");
			grid[i].id = i
			grid[i].width = 195;
			grid[i].height = 195;
			document.getElementById('board').appendChild(grid[i])
		}
	}

	var switchTurns = function() {
		if (turn === true) {
			mark = "X";
		} else {
			mark = "O"
		}
		turn = !turn
	}

	var areEqual = function (arr) {
	   for (var i = 1; i< arr.length; i++){
	      if (arr[i] == null || arr[i] != arr[i-1])
	         return false;
	   }
	   return true;
	}

	var makeMark = function () {
		for (var i = 0; i < 9; i++) {
			document.getElementById(String(i)).addEventListener("click", function() {
				if (board_dup[this.id] === undefined) {
					var canvas = document.getElementById(String(this.id))
					var c = canvas.getContext('2d');
					c.fillStyle = "black";
					c.font = 'lighter 100px Verdana'; 
					c.fillText(mark, canvas.width - 135, canvas.height - 60);
					board_dup[this.id] = mark
					switchTurns();
					won();
				}
			})
		}
	}


	var won = function () {
	  var winConditions = [
	  	[board_dup[0], board_dup[1], board_dup[2]],
	  	[board_dup[3], board_dup[4], board_dup[5]],
	  	[board_dup[6], board_dup[7], board_dup[8]],
	  	[board_dup[0], board_dup[3], board_dup[6]],
	  	[board_dup[1], board_dup[4], board_dup[7]],
	  	[board_dup[2], board_dup[5], board_dup[8]],
	  	[board_dup[0], board_dup[4], board_dup[8]],
	  	[board_dup[2], board_dup[4], board_dup[6]]
	  ]
	  var win = false
	  for (var i = 0; i < 9; i++) {
	  	if (winConditions[i] && areEqual(winConditions[i])) {
	  		win = true
	  		alert(winConditions[i][0] + " WINS!")
	  		location.reload();
	  	}
	  }

	  var tieCondition = [
	  	Boolean(board_dup[0]), Boolean(board_dup[1]), Boolean(board_dup[2]),
	  	Boolean(board_dup[3]), Boolean(board_dup[4]), Boolean(board_dup[5]),
	  	Boolean(board_dup[6]), Boolean(board_dup[7]), Boolean(board_dup[8]),
	  ]                     

	 if (board_dup[0] && areEqual(tieCondition) && !win) {
	 	alert("Cat's Game!");
	 	location.reload();
	 }
	};

	setBoard();
	makeMark();
})();