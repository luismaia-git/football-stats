import { Referee } from "./referee";


describe('Referee', () => {
  it('should be able to create a referee', () => {
    
    const referee = Referee.create({
      name: 'some-name',
      nationality: 'something',
      updatedAt: new Date()
    })

    expect(referee).toBeTruthy();
  
  });
});