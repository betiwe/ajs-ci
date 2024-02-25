export default function howHealthy(object){
	if (object.health > 50) {
		return 'healthy';
	}
	if (object.health <= 50 && object.health >= 15) {
		return 'wounded';
	}
	if (object.health < 15) {
		return 'critical';
	}
}