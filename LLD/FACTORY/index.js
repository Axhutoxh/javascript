class GelPen{
    product = 'gel pen'
}

class BallPen{
    product = 'ball pen'
}

class SparkePen{
    product = 'sparkel pen'
}

class PenFactory{

    getProduct = function(type){
        switch(type){
            case 'gel':
                return new GelPen()
                break;
            case 'ball':
                return new BallPen()
                break
                case 'sparkel':
                    return new SparkePen()
                    break
        }
    }

}

const penFactory = new PenFactory()
console.log(penFactory.getProduct('gel'))
console.log(penFactory.getProduct('ball'))
console.log(penFactory.getProduct('sparkel'))