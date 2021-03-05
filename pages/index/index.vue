<template>
	<view class="content">
		<view class="item_list" id="itemList" ref="itemList">
			<view :class="[status1==1?'item aimon':status1==2?'item aimin':'item']" :style="{top:top1}" ref="drog1" id="drog1" @touchmove.prevent="e=>mousemove(e,1)"
			 @touchend="loose(1)" @touchstart="e=>drog(e,1)">
				<view class="circle">
					{{tmpPosition.index1}}
				</view>
				<view class="text">
					选项A
				</view>
				<view class="icon">
					<!-- <image class="img" src="../../static/line_icon.png" mode=""></image> -->
				</view>
			</view>
			<view :class="[status2==1?'item aimon':status2==2?'item aimin':'item']" :style="{top:top2}" ref="drog2" id="drog2" @touchmove.prevent="e=>mousemove(e,2)"
			 @touchend="loose(2)" @touchstart="e=>drog(e,2)">
				<view class="circle">
					{{tmpPosition.index2}}
				</view>
				<view class="text">
					选项B
				</view>
				<view class="icon">
					<!-- <image class="img" src="../../static/line_icon.png" mode=""></image> -->
				</view>
			</view>
			<view :class="[status3==1?'item aimon':status3==2?'item aimin':'item']" :style="{top:top3}" ref="drog3" id="drog3" @touchmove.prevent="e=>mousemove(e,3)"
			 @touchend="loose(3)" @touchstart="e=>drog(e,3)">
				<view class="circle">
					{{tmpPosition.index3}}
				</view>
				<view class="text">
					选项C
				</view>
				<view class="icon">
					<!-- <image class="img" src="../../static/line_icon.png" mode=""></image> -->
				</view>
			</view>
			<view :class="[status4==1?'item aimon':status4==2?'item aimin':'item']" :style="{top:top4}" ref="drog4" id="drog4" @touchmove.prevent="e=>mousemove(e,4)"
			 @touchend="loose(4)" @touchstart="e=>drog(e,4)">
				<view class="circle">
					{{tmpPosition.index4}}
				</view>
				<view class="text">
					选项D
				</view>
				<view class="icon">
					<!-- <image class="img" src="../../static/line_icon.png" mode=""></image> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var vm;
	export default {
		data() {
			return {
				title: 'Hello',
				count: 0,
				status1: 0,
				status2: 0,
				status3: 0,
				status4: 0,
				start_mouseY: 0,
				mouseY: 0,
				item_list_box_offsetTop: 0,
				position: [1, 2, 3, 4],
				timer: null,
				tmpPosition: {
					index1: 1,
					index2: 2,
					index3: 3,
					index4: 4,
				},
				tmpP: 1,
				top1: 0,
				top2: '50px',
				top3: '100px',
				top4: '150px',
			}
		},
		onLoad() {

		},
		mounted() {
			vm = this;
		},
		methods: { 
			drog(event, index) {
				this.tmpP = this.position[index];
				let EVENT = window ? window.event : event;
				this.start_mouseY = EVENT.changedTouches['0'].pageY;
				for(let i=1;i<5;i++){
					if(i==index){
						this['status' + i] = 1;
					}else{
						this['status' + i] = 2;
					}
				}
				//TEST 
				let _height = 50; 
				let _moveL = 12;
				switch (index) {
					case 1:
						_moveL = 12;
						break;
					case 2:
						_moveL = 50;
						break;
					case 3:
						_moveL = 100;
						break;
					case 4:
						_moveL = 150;
						break;
				}
				// culPosition(_height,_moveL,1)
			},
			loose(index) {
				clearTimeout(this.timer)
				for(let i=1;i<5;i++){
					this['status' + i] = 0;
				}
				this.position = [
					this.tmpPosition.index1,
					this.tmpPosition.index2,
					this.tmpPosition.index3,
					this.tmpPosition.index4,
				];
				let _height = 50;
				if (typeof window !== 'undefined') { 
					document.getElementById('drog' + index).style.top = (this.position[index - 1] - 1) * _height + 'px';
				} else {
					console.log(this.position,'this.position')
					console.log('top' + index,(this.position[index - 1] - 1) * _height,'=========')
					this['top' + index] = (this.position[index - 1] - 1) * _height + 'px';
				}
				// let _height = document.getElementById('drog1').getBoundingClientRect().height;
				// let top = document.getElementById('drog' + index).offsetTop;
			},

			mousemove(event, index) {
				let EVENT = window ? window.event : event;
				if (this.timer != null) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout((index) => {
					this.mouseY = EVENT.changedTouches['0'].pageY;
					let _height = 50;
					let _moveL = (this.position[index - 1] - 1) * _height + (this.mouseY - this.start_mouseY);
					// let _moveL = (this.tmpPosition['index' + index] - 1) * _height + (this.mouseY - this.start_mouseY);
					if (_moveL < 0) {
						_moveL = 0
					} else if (_moveL > _height * 3) {
						_moveL = _height * 3
					}
					if (typeof window != 'undefined') {
						document.getElementById('drog' + index).style.top = _moveL + 'px';
					} else {
						this['top' + index] = _moveL + 'px';
					}
					throttle(culPosition(_height, _moveL, index), 200)
				}, 10, index)
			},
		}
	}
	var throttle = function(func, delay) {
		var prev = Date.now();
		return function() {
			var context = this;
			var args = arguments;
			var now = Date.now();
			if (now - prev >= delay) {
				func.apply(context, args);
				prev = Date.now();
			}
		}
	}

	function culPosition(_height, top, index) {
		top = parseInt(top)
		let P = 0
		if (top < 25) {
			P = 1
		} else if (25 <= top && top < 75) {
			P = 2
		} else if (75 <= top && top < 125) {
			P = 3
		} else {
			P = 4
		}
		if (P === 0 || P == vm.tmpP) {
			return
		}
		vm.tmpP = P;
		let tmpValue = 1;
		for (let item in vm.tmpPosition) {
			if (vm.tmpPosition[item] == P) {
				tmpValue = item
			}
		}
		let tmpIndex = vm.tmpPosition['index' + index]; // 旧
		vm.tmpPosition['index' + index] = P;
		vm.tmpPosition[tmpValue] = tmpIndex; 
		if (typeof window != 'undefined') {
			document.getElementById('drog' + tmpValue.replace('index', '')).style.top = (vm.tmpPosition[tmpValue] - 1) * _height +
				'px';  
		} else {
			vm['top' + tmpValue.replace('index', '')] = (vm.tmpPosition[tmpValue] - 1) * _height + 'px';
		} 
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #F1F1F1;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.item_list {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: absolute;
		top: 100rpx;
		left: 0;
		height: 200px;
		background-color: #FFFFFF;
	}
	.text{
		width: calc(100% - 200rpx);
	}

	#drog1 {
		top: 0;
	}

	#drog2 {
		top: 100rpx;
	}

	#drog3 {
		top: 200rpx;
	}

	#drog4 {
		top: 300rpx;
	}

	.item {
		box-sizing: border-box;
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-top: #F1F1F1 solid 1px;
		position: absolute;
		transition: top 0.3s; 
	}

	.aimon {
		border-top: none;
		background: #007AFF;
		z-index: 9;
		transition: top 0s; 
		opacity: 0.7;
		box-shadow: #888888 0px 0px 10px;
	}
	.aimin .circle{
		background: #F1F1F1!important; 
	}
	.aimon .circle{
		background-color: #FFFFFF!important;
		color: #007AFF!important;
	}

	.icon {
		width: 60rpx;
		height: 60rpx;
		margin-right: 20rpx;  
		background: url(../../static/line_icons.png);
		background-size: 60rpx 60rpx;
	}
	
	.aimin .icon{
		background: #FFFFFF;
	} 
	.aimon .icon{
		background-image: url(../../static/up_down_new.png)!important;
	}

	.item .circle {
		margin-left: 20rpx;
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background-color: #007AFF;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}


	.icon .img {
		width: 60rpx;
		height: 60rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
