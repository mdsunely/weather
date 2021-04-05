import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

    transform(value: number, unit: string) {
        if (value && !isNaN(value)) {
            if (unit === 'C') {
                var temp = value - 273.15;
                return temp.toFixed(2) + ' C';
            }
        }
        return;
    }

}