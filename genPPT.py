from pptx import Presentation

prs = Presentation("example1.pptx")
core = prs.core_properties
print(len(prs.slides[0].shapes))
for shape in prs.slides[0].shapes:
    print(shape)
    for gra in shape.graphfrm:
        print(gra)
