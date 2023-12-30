start_line = 0
end_line = 0
with open(r"twigs.txt", 'r') as md:
    
    for l_no, line in enumerate(md):
        # search string
        if 'Breakfast' in line:
            print('string found in a file')
            start_line = l_no
            print('Line Number:', l_no)
            print('Line:', line)
            # don't look for next lines
            break
    for l_no, line in enumerate(md):
        # search string
        if '</i> Brunch' in line:
            print('string found in a file')
            print('Line Number:', l_no)
            print('Line:', line)
            end_line = l_no
            print('line is ', type(line))
            print('line length: ', len(line))
            print('1st character in line is ', line[90])
            # don't look for next lines
            break
    for l_no, line in enumerate(md):
        # search string
        if (l_no > end_line):
            print("limit reached")
            break
        if 'item-name' in line:
            print('string found in a file')
            print('Line Number:', l_no)
            print('Line:', line)

"""
def get_lines(fp, line_numbers):
    return (x for i, x in enumerate(fp) if i in line_numbers)
print("here")
with open(r"twigs.txt", 'r') as md:
    # read line 4 and 7
    print(start_line)
    print(end_line)
    lines = get_lines(md, [start_line, end_line])
    # print each line
    for line in lines:
        if(line.find('item-name')):
            print(line)
"""
