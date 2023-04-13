import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestService {
  dummyArry:Array<any> = [{
    id:1,  
    name:"Sunny",
      gender:"Male"
  },
  {
    id:2,
    name:"Arpit",
    gender:"Male"
},
{
  id:3,
  name:"Nishi",
  gender:"Female"
}]
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll() {
    return this.dummyArry;
  }

  findOne(id: number) {
    // return `This action returns a #${id} test`;
    return this.dummyArry.filter(item=>{
      return item.id==id;
    })
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
