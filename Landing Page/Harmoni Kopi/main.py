class Person:
    def __init__(self, name="john doe"):
        self.name = name
        self.listName = []

    def setListName(self):
        self.listName.append(self.name)

    def getListName(self):
        print("Hello my name is " + self.listName)

    def setName(self):
        self.name = input("Your Name : ")

    def getName(self):
        print("Hello my name is " + self.name)


p1 = Person()
p1.setName()
p1.getName()
p1.setListName()
p1.getListName()
