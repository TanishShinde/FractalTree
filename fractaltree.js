var factor=0.7;
var draw_tree = function(ctx,org,init_angle,dangle,scale,order,init){
	var x,y;
	if(order == init)
		return;
	else if(init==0){
		ctx.beginPath();
		ctx.moveTo(org[0],org[1]);
		norg = generate_point(org,init_angle,scale);
		ctx.lineTo(norg[0],norg[1]);
		ctx.stroke();
		draw_tree(ctx,norg,init_angle,dangle,scale*factor,order,init+1);
	}
	else{
		ctx.beginPath();
		ctx.moveTo(org[0],org[1]);
		norg = generate_point(org,init_angle + dangle,scale);
		ctx.lineTo(norg[0],norg[1]);
		ctx.stroke();
		draw_tree(ctx,norg,init_angle+dangle,dangle,scale*factor,order,init+1);	
		ctx.moveTo(org[0],org[1]);
		norg = generate_point(org,init_angle - dangle,scale);
		ctx.lineTo(norg[0],norg[1]);
		ctx.stroke();
		draw_tree(ctx,norg,init_angle-dangle,dangle,scale*factor,order,init+1);
	}
}

var generate_point = function(org,alpha,l){
	var x = org[0] + l*Math.cos(alpha);
	var y = org[1] - l*Math.sin(alpha);
	return [x,y];
}