package main
import "fmt"

type student struct{
	Name string
	Reg_num float32
	dept string
}
func main() {
	//b:=4.0
	//a:=3.0
	//message := b/a
	//fmt.Println(message)
	s1:=student{Name:"Maansa" , Reg_num:103 , dept:"cs"}
	fmt.Println("Name:",s1.Name,"Registration",s1.Reg_num,"Department:",s1.dept)
}

/*
func ifelseDemo(){
	var a,b int
	fmt.Scanln(&a)
	fmt.Scanln(&b)
	if a > b {
		fmt.Println(" a is greater ")
	} else {
		fmt.Println("b is greater")
	}
}

func fordemo(){
	n:=1
	for n<5{
		n*=2
	}
	fmt.Println(n)
}

func fordemo2(){
	letters := []string{"A", "B", "C", "D"}
	for _, value := range letters {
  		fmt.Println( "Value:", value)
	}
}
*/