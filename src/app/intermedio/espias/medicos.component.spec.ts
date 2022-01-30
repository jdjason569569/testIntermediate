
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { of } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null!);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    // ngOnInit() {
    //     this._medicoService.getMedicos()
    //           .subscribe( (medicos: any[]) => this.medicos = medicos );
    //   }
    it('Debe cargar los medicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];

        //spyOn(servicio, 'getMedicos').and.returnValue(of(medicos));

        spyOn(servicio, 'getMedicos').and.callFake(()=>{
            return of(medicos);
        });
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });


    // agregarMedico() {
    //     const medico = { nombre: 'Médico Juan Carlos' };
    
    //     this._medicoService.agregarMedico(medico)         //  Saber si se hace la llamada al servicio
    //           .subscribe(
    //             (medicoDB: any) => this.medicos.push(medicoDB),
    //             (err:any) => this.mensajeError = err
    //           );
    //   }

    it('Debe llamar al servidor para agregar un medico', ()=>{  // esta prueba comprueba que se ha llamado uel servicio
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(() =>{
         return of();
        });
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();

    });


    it('Agregar un medico al array de medicos', ()=>{  

        const medico = {
            id: 1,
            nombre: 'david'
        }

        const espia = spyOn(servicio, 'agregarMedico').and.returnValue(of(medico));
        componente.agregarMedico();
        expect(componente.medicos.length).toBe(1);

    });


});
