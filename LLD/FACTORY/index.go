package main

import "fmt"

// App
type Pen interface {
	getPen() string
}

type BallPen struct {
	Name string
}

func getBallPen() *BallPen {
	return &BallPen{}
}

func (s *BallPen) getPen() string {
	return "Ball Pen"
}

type GelPen struct {
	Name string
}

func getGelPen() *GelPen {
	return &GelPen{}
}

func (h *GelPen) getPen() string {
	return "Gel Pen"
}

func main() { // Client
	getPenFactory(1)
	getPenFactory(2)
}

func getPenFactory(pentype int) { // Factory Class/Object
	var pen Pen
	if pentype == 1 {
		pen = getGelPen()
	} else {
		pen = getBallPen()
	}
	PenInfo := pen.getPen()
	fmt.Println(PenInfo)
}
